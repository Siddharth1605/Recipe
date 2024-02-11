package com.example.recipe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.recipe.model.Mexicanfoods;
import com.example.recipe.service.MexicanfoodsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/mexicancuisine")
public class MexicanfoodsController {
	@Autowired
	MexicanfoodsService service;
	
	@GetMapping("/get")
	public List<Mexicanfoods> get()
	{
		return service.getFoods();
	}
	
	@GetMapping("/getFood/{foodId}")
	public Optional<Mexicanfoods> getFood(@PathVariable int foodId)
	{
		return service.getFoodById(foodId);
	}
	
	@PostMapping("/post")
	public Optional<Mexicanfoods> postFood(@RequestBody Mexicanfoods food)
	{
		return service.createFood(food);
	}
	
	@PutMapping("/put/{foodId}")
	public Optional<Mexicanfoods> putFood(@RequestBody Mexicanfoods food, @PathVariable int foodId)
	{
		return service.updateFood(food);
	}
	
	@DeleteMapping("/deleteAlle/{foodId}")
	public String delete(@PathVariable int foodId)
	{
		return service.deleteFood(foodId);
	}
	
	@DeleteMapping("/delete")
	public String deleteFoods()
	{
		return service.deleteAllFoods();
	}
}
