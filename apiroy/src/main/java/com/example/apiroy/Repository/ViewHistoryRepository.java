package com.example.apiroy.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.apiroy.Pojo.Book;
import com.example.apiroy.Pojo.ViewHistory;

public interface ViewHistoryRepository extends JpaRepository<ViewHistory,Long>{
    @Query("SELECT vh.book FROM ViewHistory vh JOIN vh.user u ON u.id = ?1 ORDER BY vh.viewedAt DESC")
    List<Book> getRecentlyViewedHistory(Long id);
}
