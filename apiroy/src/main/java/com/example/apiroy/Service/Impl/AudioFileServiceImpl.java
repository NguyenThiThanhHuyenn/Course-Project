package com.example.apiroy.Service.Impl;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import com.cloudinary.Cloudinary;
import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Repository.AudioFileRepository;
import com.example.apiroy.Repository.BookRepository;
import com.example.apiroy.Service.AudioFileService;
import com.example.apiroy.Service.BookService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class AudioFileServiceImpl implements AudioFileService{

    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookService bookService;
    @Autowired
    private AudioFileRepository audioFileRepository;


    @Override
    public String uploadAudio(MultipartFile audioFile) throws IOException {
        System.out.println("[DEBUT] - START UPLOAD IMAGE");
        Map<String, String> options = new HashMap<>();
        options.put("resource_type", "auto");

        Map<?, ?> uploadResult = cloudinary.uploader().upload(audioFile.getBytes(), options);

        return uploadResult.get("secure_url").toString();
    }

    @Override
    public AudioFile createAudioFile(Long bookId, MultipartFile audioFile, String audioName) throws IOException {
        Book book = bookRepository.findById(bookId).get();
        try {
            String audioUrl = uploadAudio(audioFile);
            AudioFile newAudioFile = new AudioFile();
            newAudioFile.setAudioFile(audioUrl);
            newAudioFile.setAudioName(audioName);
            newAudioFile.setBook(book);
            newAudioFile.setCreatedAt(LocalDateTime.now());
            audioFileRepository.save(newAudioFile);
            if (book.getListAudioFiles() == null) {
                book.setListAudioFiles(new ArrayList<>());
            }
            book.getListAudioFiles().add(newAudioFile);
            bookRepository.save(book);
            return newAudioFile;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public AudioFile getAudioById(Long id, Long bookId) throws Exception {
        AudioFile audioFile = audioFileRepository.findById(id).orElseThrow(() -> new Exception("Audio này không tồn tại: " + id));
        bookService.increaseViewCount(bookId);
        return audioFile;
    }

    @Override
    public List<Comment> getAllCommentsByAudio(Long id) {
        return audioFileRepository.getAllCommentsByAudio(id);
    }

}