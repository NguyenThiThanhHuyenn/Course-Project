package com.example.apiroy.Service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface AudioFileService {
    String uploadAudio(MultipartFile audioFile) throws IOException;
}
