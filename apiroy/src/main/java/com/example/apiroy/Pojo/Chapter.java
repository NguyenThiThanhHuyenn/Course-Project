package com.example.apiroy.Pojo;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "chapter")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "chapter_name")
    private String chapterName;

    @Column(name = "content", length = 50000)
    private String content;

    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "chapter")
    private List<Comment> listComment;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}