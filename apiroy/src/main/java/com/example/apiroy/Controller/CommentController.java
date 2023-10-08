package com.example.apiroy.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Service.CommentService;

import jakarta.validation.Valid;
import lombok.*;

@RestController
@RequestMapping("api/comment")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/{userId}/comment/{chapterId}")
    public ResponseEntity<?> createComment(@PathVariable(value = "userId") Long userId,
    @PathVariable(value = "chapterId") Long chapterId,
    @Valid @RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(userId, chapterId, comment));
    }

    @PostMapping("/{userId}/comment-audio/{audioId}")
    public ResponseEntity<?> createCommentInAudio(@PathVariable(value = "userId") Long userId,
    @PathVariable(value = "audioId") Long audioId,
    @Valid @RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createCommentInAudio(userId, audioId, comment));
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
