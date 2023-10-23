package com.example.apiroy.Repository;

import com.example.apiroy.Enum.BookStatus;
import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.Chapter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT c FROM Chapter c join Book b on c.book.id = b.id AND b.id = ?1")
    List<Chapter> getAllChaptersByBook(Long id);

    @Query("SELECT a FROM AudioFile a join Book b on a.book.id = b.id AND b.id = ?1")
    List<AudioFile> getAllAudioFilesByBook(Long id);

    List<Book> findByStatus(String status);

}
