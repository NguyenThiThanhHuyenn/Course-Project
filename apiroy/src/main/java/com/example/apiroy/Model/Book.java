package com.example.apiroy.Model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

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

    @Column(name = "describe", length = 5000)
    private String describe;

//    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "book")
    List<Chapter> listChapter;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_love_book",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> listUserPressingLove;



    public Book(String nameBook, User author, String describe, String coverImg, List<Genre> listGenre, List<Chapter> listChapter){
        this.setNameBook(nameBook);
        this.setUser(author);
        this.setDescribe(describe);
        this.setCoverImg(coverImg);
        this.setListGenre(listGenre);
        this.setListChapter(listChapter);
    }
}
