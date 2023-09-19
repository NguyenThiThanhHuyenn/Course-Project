package com.example.apiroy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiroy.Model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{
}
