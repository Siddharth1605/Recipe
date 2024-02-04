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

import com.example.recipe.model.Indianfoods;
import com.example.recipe.service.IndianfoodsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class IndianfoodsController {

	@Autowired
	IndianfoodsService service;
	
	@GetMapping("/get")
	public List<Indianfoods> getFoods()
	{
		return service.getAllFoods();
	}
	
	@GetMapping("/getFood/{foodId}")
	public Optional<Indianfoods> getFoodById(@PathVariable int foodId)
	{
		return service.getFoodById(foodId);
	}
	
	@PostMapping("/post")
	public Optional<Indianfoods> postFood(@RequestBody Indianfoods food)
	{
		return service.createFood(food);
	}
	
	@PutMapping("/put/{foodId}")
	public Optional<Indianfoods> putFood(@RequestBody Indianfoods food, @PathVariable("foodId") int foodId)
	{
		return service.updateFood(food);
	}
	
	@DeleteMapping("/deleteAll")
	public String deleteFoods()
	{
		return service.deleteFoods();
	}
	
	@DeleteMapping("/delete/{foodId}")
	public String deleteFoodId(@PathVariable("foodId") int foodId)
	{
		return service.deleteFoodById(foodId);
	}
}
