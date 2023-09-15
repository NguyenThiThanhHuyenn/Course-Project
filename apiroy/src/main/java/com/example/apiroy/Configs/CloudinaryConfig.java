package com.example.apiroy.Configs;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary getCloudinary() {
        return new Cloudinary("cloudinary://934745583984279:zTBknsZPcvCbNULmf-1GIN0V-qI@dhbx0nbwf");
    }
}

