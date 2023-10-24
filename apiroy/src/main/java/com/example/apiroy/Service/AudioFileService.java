package com.example.apiroy.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Comment;


public interface AudioFileService {
    String uploadAudio(MultipartFile audioFile) throws IOException;

    AudioFile createAudioFile(Long bookId, MultipartFile audioFile, String audioName) throws IOException;

    AudioFile getAudioById(Long id, Long bookId) throws Exception;

    public List<Comment> getAllCommentsByAudio(Long id);
}