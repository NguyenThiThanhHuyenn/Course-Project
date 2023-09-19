package com.example.apiroy.Repository;

import com.example.apiroy.Model.Chapter;
import com.example.apiroy.Model.Comment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    @Query("SELECT cm FROM Comment cm JOIN cm.chapter c ON c.id = ?1")
    List<Comment> getAllCommentsByChapter(Long id);
}
