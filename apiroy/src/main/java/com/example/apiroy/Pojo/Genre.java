package com.example.apiroy.Pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "genre")
@Getter
@Setter
@NoArgsConstructor
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "genre_name", nullable = false)
    private String nameOfGenre;

    @JsonIgnore
    @ManyToMany(mappedBy = "listGenre")
    private List<Book> listBook;

    public Genre(String genre) {
        this.setNameOfGenre(genre);
    }
}
