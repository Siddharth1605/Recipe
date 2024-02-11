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

import com.example.recipe.model.Chinesefoods;
import com.example.recipe.service.ChinesefoodsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/chinesecuisine")
public class ChinesefoodsController {
	@Autowired
	ChinesefoodsService service;
	
	@GetMapping("/get")
	public List<Chinesefoods> get()
	{
		return service.getFoods();
	}
	
	@GetMapping("/getFood/{foodId}")
	public Optional<Chinesefoods> getFood(@PathVariable int foodId)
	{
		return service.getFoodById(foodId);
	}
	
	@PostMapping("/post")
	public Optional<Chinesefoods> postFood(@RequestBody Chinesefoods food)
	{
		return service.createFood(food);
	}
	
	@PutMapping("/put/{foodId}")
	public Optional<Chinesefoods> putFood(@RequestBody Chinesefoods food, @PathVariable int foodId)
	{
		return service.updateFood(food);
	}
	
	@DeleteMapping("/deleteAll")
	public String delete(@PathVariable int foodId)
	{
		return service.deleteFood(foodId);
	}
	
	@DeleteMapping("/delete/{foodId}")
	public String deleteFoods()
	{
		return service.deleteAllFoods();
	}
}
