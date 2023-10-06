package com.example.apiroy.Pojo;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "comment")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private Chapter chapter;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "comment_text", length = 1000)
    private String commentText;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}
