package com.example.apiroy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.User;


import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT t FROM Book t JOIN t.listUserPressingLove nd ON nd.id = ?1")
    List<Book> getListFavoriteBookByUser(Long id);

    @Query("SELECT t FROM Book t JOIN t.user tg ON tg.id = ?1")
    List<Book> getBookByUser(Long id);

    Optional<User> findByEmail(String email);


}