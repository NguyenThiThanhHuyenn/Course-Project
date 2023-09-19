package com.example.apiroy.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.apiroy.Model.Comment;
import com.example.apiroy.Service.CommentService;

import jakarta.validation.Valid;
import lombok.*;

@RestController
@RequestMapping("api/comment")
@RequiredArgsConstructor
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/{userId}/comment/{chapterId}")
    public ResponseEntity<?> createComment(@PathVariable(value = "userId") Long userId,
    @PathVariable(value = "chapterId") Long chapterId,
    @Valid @RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(userId, chapterId, comment));
    }

    @PutMapping("/update-comment/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "commentId") Long commentId,
                                           @Valid @RequestBody Comment commentDetails) throws Exception {
        return (ResponseEntity.ok(commentService.updateComment(commentId, commentDetails)));
    }

    @DeleteMapping("/delete-comment/{commentId}")
    public Map<String, Boolean> deleteComment(@PathVariable(value = "commentId") Long commentId)
            throws Exception {
        return commentService.deleteComment(commentId);
    }
}
