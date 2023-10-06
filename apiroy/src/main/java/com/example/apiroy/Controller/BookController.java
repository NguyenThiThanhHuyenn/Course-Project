package com.example.apiroy.Controller;


import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.Chapter;
import com.example.apiroy.Service.BookService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/book")
@RequiredArgsConstructor
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping()
    public ResponseEntity<?> getAllBook() {
        return ResponseEntity.ok().body(bookService.getAllBook());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookByID(@PathVariable(value = "id") Long id)
            throws Exception {
        return ResponseEntity.ok().body(bookService.getBookByID(id));
    }

    @GetMapping("approved-book-list")
    public ResponseEntity<?> getApprovedBook() {
        return ResponseEntity.ok().body(bookService.getApprovedBook());
    }

    @GetMapping("rejected-book-list")
    public ResponseEntity<?> getRejectedBook() {
        return ResponseEntity.ok().body(bookService.getRejectedBook());
    }

    @GetMapping("pending-book-list")
    public ResponseEntity<?> getPendingBook() {
        return ResponseEntity.ok().body(bookService.getPendingBook());
    }

    @PostMapping("/{id}/approved")
    public ResponseEntity<?> approvedBook(@PathVariable(value = "id") Long bookId) throws Exception {
        return ResponseEntity.ok(bookService.authorizeBook(bookId,"APPROVED"));
    }

    @PostMapping("/{id}/rejected")
    public ResponseEntity<?> rejectedBook(@PathVariable(value = "id") Long bookId) throws Exception {
        return ResponseEntity.ok(bookService.authorizeBook(bookId,"REJECTED"));
    }

    @PostMapping("/{id}/post-book")
    public ResponseEntity<?> postBook(@Valid @RequestBody Book book, @PathVariable(value = "id") Long userId) {
        Book newBook = bookService.postBook(book, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook);
    }

    @PutMapping("/{id}/update-book")
    public ResponseEntity<Book> updateBook(@PathVariable(value = "id") Long id,
                                             @Valid @RequestBody Book bookDetails) throws Exception {
        return ResponseEntity.ok(bookService.updateBook(id, bookDetails));
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteBook(@PathVariable(value = "id") Long id)
            throws Exception {
        return bookService.deleteBook(id);
    }

    @GetMapping("/{id}/chapter")
    public List<Chapter> getAllChaptersByBook(@PathVariable(value = "id") Long id) {
        return bookService.getAllChaptersByBook(id);
    }



    @PostMapping("/{id}/post-cover-image")
    public ResponseEntity<?>  postCoverImg(@RequestParam("file") MultipartFile file, @PathVariable Long id){
        try {
            Book book = bookService.postCoverImg(file, id);
            return ResponseEntity.ok(book);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{id}/post-audio-file")
    public ResponseEntity<?>  postAudioBook(@RequestParam("file") MultipartFile file, @PathVariable Long id){
        try {
            Book book = bookService.postAudioBook(file, id);
            return ResponseEntity.ok(book);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{bookId}/play-audio")
    public ResponseEntity<Book> playAudio(@PathVariable(value = "bookId") Long bookId)
            throws Exception {  
        return ResponseEntity.ok().body(bookService.playAudio(bookId));
    }

}
