package com.example.apiroy.Service.Impl;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import com.cloudinary.Cloudinary;
import com.example.apiroy.Service.AudioFileService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class AudioFileServiceImpl implements AudioFileService{

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public String uploadAudio(MultipartFile audioFile) throws IOException {
        System.out.println("[DEBUT] - START UPLOAD IMAGE");
        Map<String, String> options = new HashMap<>();
        options.put("resource_type", "auto");

        Map<?, ?> uploadResult = cloudinary.uploader().upload(audioFile.getBytes(), options);

        return uploadResult.get("secure_url").toString();
    }
    
}
