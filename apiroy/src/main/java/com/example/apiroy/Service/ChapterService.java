package com.example.apiroy.Service;

import java.util.List;
import java.util.Map;

import com.example.apiroy.Pojo.Chapter;
import com.example.apiroy.Pojo.Comment;

public interface ChapterService {

    Chapter getChapterById(Long chapterId, Long bookId) throws Exception;

    Chapter createChapter(Long bookId, Chapter chapter);

    Chapter updateChapter(Long chapterId, Chapter chapterDetails) throws Exception;

    Map<String, Boolean> deleteChapter(Long chapterId) throws Exception;

    List<Comment> getAllCommentsByChapter(Long id);

    
}
