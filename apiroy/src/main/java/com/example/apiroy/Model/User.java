package com.example.apiroy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "user_name", nullable = false)
    private String userName;
    @Column (name = "email", nullable = false)
    private String email;

    @Column (name = "password", nullable = false)
    private String password;

    @JsonIgnore //loi parse nen tam che lai
    @Column (name = "created_at", nullable = false)
    private LocalDateTime createdAt;


    @JsonIgnore
    @ManyToMany(cascade = CascadeType.REMOVE, mappedBy = "listUserPressingLove")
    private List<Book> listFavoriteBook;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    private List<Book> listBooks;

    @Column (name = "avatar", nullable = true)
    private String avatar;

    public User(String username, String password, String email, String avatar) {
        this.userName = username;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
    }

}
