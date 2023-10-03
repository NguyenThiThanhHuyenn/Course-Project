package com.example.apiroy.Service.Impl;

import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.Chapter;
import com.example.apiroy.Pojo.Comment;
import com.example.apiroy.Repository.BookRepository;
import com.example.apiroy.Repository.ChapterRepository;
import com.example.apiroy.Service.BookService;
import com.example.apiroy.Service.ChapterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional(rollbackFor = Exception.class)
public class ChapterServiceImpl implements ChapterService {

    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookService bookService;

    
    @Override
    public Chapter getChapterById(Long id, Long bookId) throws Exception {
        Chapter chapter = chapterRepository.findById(id).orElseThrow(() -> new Exception("Chương này không tồn tại: " + id));
        bookService.increaseViewCount(bookId);
        return chapter;
    }

    @Override
    public Chapter createChapter(Long bookId, Chapter chapter) {
        Book book = bookRepository.findById(bookId).get();
        chapter.setBook(book);
        chapterRepository.save(chapter);
        if(book.getListChapter() == null){
            book.setListChapter(new ArrayList<>());
        }
        book.getListChapter().add(chapter);
        bookRepository.save(book);
        return chapter;
    }

    @Override
    public Chapter updateChapter(Long chapterId, Chapter chapterDetails) throws Exception {
        Chapter chapter = chapterRepository.findById(chapterId).orElseThrow(()-> new Exception("Chương này không tồn tại: " + chapterId));
                // So sánh và cập nhật nội dung chương nếu có thay đổi
        if (!Objects.equals(chapter.getContent(), chapterDetails.getContent())) {
            chapter.setContent(chapterDetails.getContent());
        }
        return chapterRepository.save(chapter);
    }

    @Override
    public Map<String, Boolean> deleteChapter(Long chapterId) throws Exception {
        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new Exception("Chương này không tồn tại: " + chapterId));

        chapterRepository.delete(chapter);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @Override
    public List<Comment> getAllCommentsByChapter(Long id) {
        return chapterRepository.getAllCommentsByChapter(id);
    }

    

}
