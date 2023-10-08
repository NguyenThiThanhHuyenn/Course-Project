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
@Table(name = "audio_file")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class AudioFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "audio_name")
    private String audioName;

    @Column (name = "audio_file", nullable = true)
    private String audioFile;

    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "audioFile")
    private List<Comment> listComment;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}
