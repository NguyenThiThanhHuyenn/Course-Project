package com.example.apiroy.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.apiroy.Pojo.AudioFile;
import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Service.AudioFileService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/audio-file")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AudioFileController {
    
    @Autowired
    private AudioFileService audioFileService;

    @PostMapping("/{bookId}")
    public ResponseEntity<?> createAudioFile(@PathVariable(value = "bookId") Long bookId, 
    @RequestParam("file") MultipartFile file, @RequestParam("name") String audioName) {
        try {
            AudioFile audioFile = audioFileService.createAudioFile(bookId, file, audioName);
            return ResponseEntity.ok(audioFile);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}/comments-audio")
    public List<Comment> getAllCommentsByAudio(@PathVariable(value = "id") Long id) {
        return audioFileService.getAllCommentsByAudio(id);
    }
    
    @GetMapping("/{audioId}/of/{bookId}")
    public ResponseEntity<AudioFile> getAudioById(@PathVariable(value = "audioId") Long id, 
    @PathVariable(value = "bookId") Long bookId)
            throws Exception {  
        return ResponseEntity.ok().body(audioFileService.getAudioById(id, bookId));
    }


}
