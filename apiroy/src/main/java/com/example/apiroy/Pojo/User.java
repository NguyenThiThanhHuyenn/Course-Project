package com.example.apiroy.Pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column (name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    @Column (name = "password", nullable = false)
    private String password;

    // @NotBlank(message = "Confirm Password is required")
    @Transient
    private String confirmPassword;

    @JsonIgnore //loi parse nen tam che lai
    @Column (name = "created_at", nullable = false)
    private LocalDateTime createdAt;


    @JsonIgnore
    @ManyToMany(cascade = CascadeType.REMOVE, mappedBy = "listUserPressingLove")
    private List<Book> listFavoriteBook;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    private List<Book> listBooks;

    @Column (name = "avatar")
    private String avatar;

    @Column(columnDefinition = "VARCHAR(20) DEFAULT 'ROLE_USER'", name = "role")
    private String role = "ROLE_USER";

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE , mappedBy = "user")
    private List<ViewHistory> listViewHistory;


    public User(String username, String password, String email, String avatar, String role) {
        this.userName = username;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
        this.role = role;
    }

}