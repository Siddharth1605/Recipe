package com.example.recipe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.recipe.model.Mexicanfoods;
import com.example.recipe.repository.MexicanfoodsRepository;
@CrossOrigin("*")
@Service
public class MexicanfoodsService {
	@Autowired
	MexicanfoodsRepository repo;
	
	public List<Mexicanfoods> getFoods()
	{
		return repo.findAll();
	}
	
	public Optional<Mexicanfoods> getFoodById(int id)
	{
		if(repo.existsById(id))
			return repo.findById(id);
		else
			return Optional.empty();
	}
	
	public Optional<Mexicanfoods> createFood(Mexicanfoods food)
	{
		if(repo.existsById(food.getFoodId()))
			return Optional.empty();
		else
			return Optional.of(repo.save(food));
	}
	
	public Optional<Mexicanfoods> updateFood(Mexicanfoods food)
	{
		if(repo.existsById(food.getFoodId()))
			return Optional.of(repo.save(food));
		else
			return Optional.empty();
	}
	
	public String deleteFood(int foodid)
	{
		if(repo.existsById(foodid))
		{
			repo.deleteById(foodid);
			return "This food is deleted successfully";
		}
		else
			return "No data is found for this foodID";
	}
	
	public String deleteAllFoods()
	{
		repo.deleteAll();
		return "All Mexican Food datas are deleted";
	}
}
