package com.example.apiroy.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.example.apiroy.Pojo.AuthRequest;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.User;

public interface UserService {
    List<User> getAllUser();

    User getUserById(Long id) throws Exception;

    User register(User user);

    User updateUser(Long id, User userDetails) throws Exception;

    Map<String, Boolean> deleteUser(Long id) throws Exception;


    public List<Book> getBookByUser(Long id);

    List<Book> getListFavoriteBookByUser(Long id);

    Book addBookInFavorites(Long userId,Long bookId) throws Exception;

    Book removeBookFromFavorites(Long userId,Long bookId) throws Exception;

    ResponseEntity<?> login(AuthRequest user) throws Exception;

    Optional<User> findUserByEmail(String email);
    
    User postAvatar(MultipartFile file, Long id) throws Exception;
}
