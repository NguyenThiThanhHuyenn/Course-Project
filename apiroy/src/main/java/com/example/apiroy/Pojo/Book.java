package com.example.apiroy.Pojo;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "book")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (name = "book_name", nullable = false)
    private String nameBook;

    @ManyToMany
    @JoinTable(
            name = "genre_of_book",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> listGenre;

    @Column (name = "cover_image", nullable = true)
    private String coverImg;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "describe_info", length = 5000)
    private String describe;

    //    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "book")
    private List<Chapter> listChapter;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_love_book",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> listUserPressingLove;

    @Column(columnDefinition = "VARCHAR(255) DEFAULT 'PENDING'")
    private String status = "PENDING";

    @Column(name = "view_count", nullable = false)
    private int viewCount = 0;


    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "book")
    private List<AudioFile> listAudioFiles;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public Book(String nameBook, User author, String describe, String coverImg, List<Genre> listGenre, List<Chapter> listChapter, String status){
        this.setNameBook(nameBook);
        this.setUser(author);
        this.setDescribe(describe);
        this.setCoverImg(coverImg);
        this.setListGenre(listGenre);
        this.setListChapter(listChapter);
        this.setStatus(status);
    }
}