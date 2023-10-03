package com.example.apiroy.Controller;


import com.example.apiroy.Pojo.AuthRequest;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.User;
import com.example.apiroy.Service.UserService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long id)
            throws Exception {

        return ResponseEntity.ok().body(userService.getUserById(id));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User user, BindingResult bindingResult) {
        if(bindingResult.hasErrors()){
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }
        try {
            User registeredUser = userService.register(user);
            return ResponseEntity.ok(registeredUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } 
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id,
                                           @Valid @RequestBody User userDetails) throws Exception {
        return ResponseEntity.ok(userService.updateUser(id, userDetails));
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long id)
            throws Exception {
        return userService.deleteUser(id);
    }

    @GetMapping("/{id}/favorite-book")
    public List<Book> getListFavoriteBookByUser(@PathVariable(value = "id") Long id) {
        return userService.getListFavoriteBookByUser(id);
    }

    @GetMapping("/{id}/book")
    public List<Book> getBookByUser(@PathVariable(value = "id") Long id) {
        return userService.getBookByUser(id);
    }



    @PostMapping("/{userId}/add-favorite/{bookId}")
    public ResponseEntity<Void> addBookInFavorites(
            @PathVariable(value = "userId") Long userId,
            @PathVariable(value = "bookId") Long bookId) {
        try {
            userService.addBookInFavorites(userId, bookId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("{userId}/remove-favorite/{bookId}")
    public ResponseEntity<Void> removeBookFromFavorites(@PathVariable(value = "bookId") Long bookId,
                                                                       @PathVariable(value = "userId") Long userId) {
        try {
            userService.removeBookFromFavorites(userId, bookId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/find-by-email/{email}")
    public ResponseEntity<?> findUserByEmail(@PathVariable(value = "email") String email) {
        Optional<User> user = userService.findUserByEmail(email);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest user) throws Exception {
        try {
            System.out.println("[DEBUG] - " + user);
            return ResponseEntity.ok().body(userService.login(user));
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{id}/post-avatar")
    public ResponseEntity<?>  postAvatar(@RequestParam("file") MultipartFile file, @PathVariable Long id){
        try {
            System.out.println("[DEBUG] - " + file);
            User user = userService.postAvatar(file, id);
            return ResponseEntity.ok(user);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{userId}/viewed-books/{bookId}")
    public ResponseEntity<?> addHistoryEntry(
        @PathVariable(value = "userId") Long userId,
        @PathVariable(value = "bookId") Long bookId) {
        try {
            userService.addHistoryEntry(userId, bookId);
            return ResponseEntity.ok("Đã xem truyện");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{userId}/get-viewed-books")
    public ResponseEntity<List<Book>> getRecentlyViewedBooks(@PathVariable(value = "userId") Long userId) {
        try {
            List<Book> recentlyViewedBooks = userService.getRecentlyViewedHistory(userId);
            return ResponseEntity.ok(recentlyViewedBooks);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
