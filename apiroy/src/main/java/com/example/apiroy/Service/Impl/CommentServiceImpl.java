package com.example.apiroy.Service.Impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.apiroy.Pojo.Chapter;
import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Pojo.User;
import com.example.apiroy.Repository.ChapterRepository;
import com.example.apiroy.Repository.CommentRepository;
import com.example.apiroy.Repository.UserRepository;
import com.example.apiroy.Service.CommentService;



@Service
@Transactional(rollbackFor = Exception.class)
public class CommentServiceImpl implements CommentService{

    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Comment getCommentById(Long commentId) throws Exception {
        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new Exception("Bình luận này không tồn tại: " + commentId));
        return comment;
    }

    @Override
    public Comment createComment(Long userId, Long chapterId, Comment comment) {
        User user = userRepository.findById(userId).get();
        Chapter chapter = chapterRepository.findById(chapterId).get();
        comment.setUser(user);
        comment.setChapter(chapter);
        comment.setCreatedAt(LocalDateTime.now());
        commentRepository.save(comment);
        if(chapter.getListComment() == null){
            chapter.setListComment(new ArrayList<>());
        }
        chapter.getListComment().add(comment);
        chapterRepository.save(chapter);
        return comment;
    }

    @Override
    public Comment updateComment(Long commentId, Comment commentDetails) throws Exception {
       Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new Exception("Bình luận này không tồn tại: " + commentId));
                // So sánh và cập nhật nội dung bình luận nếu có thay đổi
        if (!Objects.equals(comment.getCommentText(), commentDetails.getCommentText())) {
            comment.setCommentText(commentDetails.getCommentText());
        }
                //cập nhật thời gian
        if (!Objects.equals(comment.getCreatedAt(), commentDetails.getCreatedAt())) {
            comment.setCreatedAt(LocalDateTime.now());
        }
        return commentRepository.save(comment);
    }

    @Override
    public Map<String, Boolean> deleteComment(Long commentId) throws Exception {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new Exception("Bình luận này không tồn tại: " + commentId));

        commentRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
}
