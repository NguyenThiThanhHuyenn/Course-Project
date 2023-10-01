package com.example.apiroy.Service;

import java.util.Map;

import com.example.apiroy.Pojo.Comment;

public interface CommentService {
    Comment getCommentById(Long commentId) throws Exception;

    Comment createComment(Long userId, Long chapterId, Comment comment);

    Comment updateComment(Long commentId, Comment commentDetails) throws Exception;

    Map<String, Boolean> deleteComment(Long commentId) throws Exception;
}
