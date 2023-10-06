package com.example.apiroy.Service;

import org.springframework.web.multipart.MultipartFile;

import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.Chapter;

import java.util.List;
import java.util.Map;

public interface BookService {

    List<Book> getAllBook();

    Book getBookByID(Long id) throws  Exception;

    List<Chapter> getAllChaptersByBook(Long id);

    List<AudioFile> getAllAudioFilesByBook(Long id);

    Book createBook(Book book);

    Book updateBook(Long id, Book bookDetails) throws Exception;

    Map<String, Boolean> deleteBook(Long id) throws Exception;

    Book postBook(Book book, Long userId);

    Book postCoverImg(MultipartFile file, Long id) throws Exception;


    List<Book> getApprovedBook();

    List<Book> getPendingBook();

    List<Book> getRejectedBook();

    Book authorizeBook(Long id, String action) throws Exception;

    void increaseViewCount(Long bookId);

}
