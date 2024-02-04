package com.example.recipe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.recipe.model.Indianfoods;
import com.example.recipe.repository.IndianfoodsRepository;

@CrossOrigin("*")
@Service
 public class IndianfoodsService {
	@Autowired
	IndianfoodsRepository repo;
	
	public List<Indianfoods> getAllFoods()
	{
		return repo.findAll();
	}
	
	public Optional<Indianfoods> getFoodById(int id)
	{
		if(repo.existsById(id))
			return repo.findById(id);
		else
			return Optional.empty();
	}
	
	public Optional<Indianfoods> createFood(Indianfoods food)
	{
		if(repo.existsById(food.getFoodId()))
			return Optional.empty();
		else
			return Optional.of(repo.save(food));
	}
	
	public Optional<Indianfoods> updateFood(Indianfoods food)
	{
		if(repo.existsById(food.getFoodId()))
			return Optional.of(repo.save(food));
		else
			return Optional.empty();
	}
	
	public String deleteFoods()
	{
		repo.deleteAll();
		return "Deleted Successfully";
	}
	
	public String deleteFoodById(int id)
	{
		if(repo.existsById(id))
		{
			repo.deleteById(id);
			return id + " is deleted successfully";
		}
		else
			return id + " not exists";
	}
}
