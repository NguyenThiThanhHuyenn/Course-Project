package com.example.apiroy.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Comment;

public interface AudioFileRepository extends JpaRepository<AudioFile, Long>{
    @Query("SELECT cm FROM Comment cm JOIN cm.audioFile a ON a.id = ?1")
    List<Comment> getAllCommentsByAudio(Long id);
}
