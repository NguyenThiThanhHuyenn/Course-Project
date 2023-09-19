package com.example.apiroy.Service;

import com.example.apiroy.Model.Chapter;
import com.example.apiroy.Model.Comment;

import java.util.List;
import java.util.Map;

public interface ChapterService {

    Chapter getChapterById(Long chapterId) throws Exception;

    Chapter createChapter(Long bookId, Chapter chapter);

    Chapter updateChapter(Long chapterId, Chapter chapterDetails) throws Exception;

    Map<String, Boolean> deleteChapter(Long chapterId) throws Exception;

    List<Comment> getAllCommentsByChapter(Long id);
}
