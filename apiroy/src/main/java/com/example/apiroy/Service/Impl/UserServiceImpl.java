package com.example.apiroy.Service.Impl;

import com.example.apiroy.Repository.UserRepository;
import com.example.apiroy.Repository.ViewHistoryRepository;
import com.example.apiroy.Pojo.AuthRequest;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.User;
import com.example.apiroy.Pojo.ViewHistory;
import com.example.apiroy.Repository.BookRepository;
import com.example.apiroy.Service.CoverImgService;
import com.example.apiroy.Service.UserService;

import jakarta.persistence.TransactionRequiredException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private CoverImgService coverImgService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ViewHistoryRepository viewHistoryRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> new Exception("Người dùng này không tồn tại: " + id));
        return user;
    }

    @Override
    public User register(User user) {

        if (!user.getPassword().equals(user.getConfirmPassword())) {
            throw new IllegalArgumentException("Mật khẩu không khớp!");
        }
        user.setCreatedAt(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User userDetails) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("Người dùng này không tồn tại: " + id));

        user.setUserName(userDetails.getUserName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public Map<String, Boolean> deleteUser(Long id) throws Exception{
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("Người dùng này không tồn tại: " + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


    @Override
    public List<Book> getBookByUser(Long id) {
        return userRepository.getBookByUser(id);
    }


    @Override
    public List<Book> getListFavoriteBookByUser(Long id) {
        return userRepository.getListFavoriteBookByUser(id);
    }


    public Book addBookInFavorites(Long userId, Long bookId) throws Exception {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found: " + userId));

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new Exception("Book not found: " + bookId));
        if(!user.getListFavoriteBook().contains(book)){
//            System.out.println("[DEBUG] - User: " + user);
//            System.out.println("[DEBUG] - Book: " + book);
            user.getListFavoriteBook().add(book);
            book.getListUserPressingLove().add(user);
            userRepository.save(user);
        }
        return book;
    }


    @Override
    public Book removeBookFromFavorites(Long userId, Long bookId) throws Exception {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found: " + userId));

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new Exception("Book not found: " + bookId));

        if (user.getListFavoriteBook().contains(book)) {
            user.getListFavoriteBook().remove(book);
            book.getListUserPressingLove().remove(user);
            userRepository.save(user);
        } else{
            throw new Exception();
        }
        return book;
    }

 
    @Override
    public User postAvatar(MultipartFile file, Long id) throws Exception {
        try {
            String url = coverImgService.uploadImage(file);
            User user = userRepository.findById(id).get();
            System.out.println("[DEBUT] - START SET AVATAR");
            user.setAvatar(url);
            System.out.println("[DEBUG] - User: " + user);
            userRepository.save(user);
            return user;
        } catch (IOException e) {
            throw new Exception("Fail to upload image");
        } catch(TransactionRequiredException e){
            System.out.println("[DEBUG] - BUG HERE");
            e.printStackTrace();
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public ResponseEntity<?> login(AuthRequest account) throws Exception {
       try{
        Optional<User> acconutOptional = userRepository.findByEmail(account.getEmail());
        if(!acconutOptional.isPresent()){
            throw new Exception("Email not found!");
        }
        Authentication authenticated = authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(account.getEmail(),
         account.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authenticated);
        
        User authenticationUser = acconutOptional.get();

        return ResponseEntity.ok(authenticationUser);
       }catch(Exception e){
        // Map<String, String> errorResponse = new HashMap<>();
        // errorResponse.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
       }
    }

    @Override
    public ViewHistory addHistoryEntry(Long userId, Long bookId) {
        User user = userRepository.findById(userId).get();
        Book book = bookRepository.findById(bookId).get();
        ViewHistory historyEntry = new ViewHistory();
        historyEntry.setUser(user);
        historyEntry.setBook(book);
        historyEntry.setViewedAt(LocalDateTime.now());

        viewHistoryRepository.save(historyEntry);

        return historyEntry;
    }

    @Override
    public List<Book> getRecentlyViewedHistory(Long userId) {
        return viewHistoryRepository.getRecentlyViewedHistory(userId);
    }

}
