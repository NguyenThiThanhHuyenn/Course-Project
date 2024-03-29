package com.example.apiroy.Controller;


import com.example.apiroy.Pojo.Chapter;
import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Service.ChapterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/chapter")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChapterController {

    @Autowired
    private ChapterService chapterService;


    @PostMapping("/{bookId}")
    public ResponseEntity<?> createChapter(@PathVariable(value = "bookId") Long bookId, @Valid @RequestBody Chapter chapter) {
        return ResponseEntity.ok(chapterService.createChapter(bookId,chapter));
    }

    @PutMapping("/update-chapter/{chapterId}")
    public ResponseEntity<Chapter> updateChapter(@PathVariable(value = "chapterId") Long chapterId,
                                                 @Valid @RequestBody Chapter chapterDetails) throws Exception {
        return (ResponseEntity.ok(chapterService.updateChapter(chapterId, chapterDetails)));
    }

    @DeleteMapping("/delete-chapter/{chapterId}")
    public Map<String, Boolean> deleteChapter(@PathVariable(value = "chapterId") Long chapterId)
            throws Exception {
        return chapterService.deleteChapter(chapterId);
    }

    @GetMapping("/{id}/comments")
    public List<Comment> getAllCommentsByChapter(@PathVariable(value = "id") Long id) {
        return chapterService.getAllCommentsByChapter(id);
    }

    @GetMapping("/{chapterId}/of/{bookId}")
    public ResponseEntity<Chapter> getChapterByID(@PathVariable(value = "chapterId") Long id,
                                                  @PathVariable(value = "bookId") Long bookId)
            throws Exception {
        return ResponseEntity.ok().body(chapterService.getChapterById(id, bookId));
    }
}