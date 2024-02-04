package com.example.recipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.recipe.model.Indianfoods;
@CrossOrigin("*")
public interface IndianfoodsRepository extends JpaRepository<Indianfoods, Integer>, PagingAndSortingRepository<Indianfoods, Integer>{

}
