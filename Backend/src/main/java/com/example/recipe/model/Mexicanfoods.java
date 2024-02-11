package com.example.recipe.model;

import jakarta.persistence.*;

@Entity
@Table(name = "mexicanfoods")
public class Mexicanfoods {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "food_id")
    private int foodId;

    @Column(name = "food_name", nullable = false)
    private String foodName;

    @Column(name = "food_image")
    private String foodImage;

    @Column(name = "food_stars")
    private double foodStars;

    @Column(name = "ingredient_1")
    private String ingredient1;

    @Column(name = "ingredient_2")
    private String ingredient2;

    @Column(name = "ingredient_3")
    private String ingredient3;

    @Column(name = "ingredient_4")
    private String ingredient4;

    @Column(name = "ingredient_5")
    private String ingredient5;

    @Column(name = "ingredient_6")
    private String ingredient6;

    @Column(name = "nutrient_1")
    private String nutrient1;

    @Column(name = "nutrient_2")
    private String nutrient2;

    @Column(name = "nutrient_3")
    private String nutrient3;

    @Column(name = "nutrient_4")
    private String nutrient4;

    @Column(name = "nutrient_5")
    private String nutrient5;

    @Column(name = "nutrient_6")
    private String nutrient6;

	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getFoodImage() {
		return foodImage;
	}

	public void setFoodImage(String foodImage) {
		this.foodImage = foodImage;
	}

	public double getFoodStars() {
		return foodStars;
	}

	public void setFoodStars(double foodStars) {
		this.foodStars = foodStars;
	}

	public String getIngredient1() {
		return ingredient1;
	}

	public void setIngredient1(String ingredient1) {
		this.ingredient1 = ingredient1;
	}

	public String getIngredient2() {
		return ingredient2;
	}

	public void setIngredient2(String ingredient2) {
		this.ingredient2 = ingredient2;
	}

	public String getIngredient3() {
		return ingredient3;
	}

	public void setIngredient3(String ingredient3) {
		this.ingredient3 = ingredient3;
	}

	public String getIngredient4() {
		return ingredient4;
	}

	public void setIngredient4(String ingredient4) {
		this.ingredient4 = ingredient4;
	}

	public String getIngredient5() {
		return ingredient5;
	}

	public void setIngredient5(String ingredient5) {
		this.ingredient5 = ingredient5;
	}

	public String getIngredient6() {
		return ingredient6;
	}

	public void setIngredient6(String ingredient6) {
		this.ingredient6 = ingredient6;
	}

	public String getNutrient1() {
		return nutrient1;
	}

	public void setNutrient1(String nutrient1) {
		this.nutrient1 = nutrient1;
	}

	public String getNutrient2() {
		return nutrient2;
	}

	public void setNutrient2(String nutrient2) {
		this.nutrient2 = nutrient2;
	}

	public String getNutrient3() {
		return nutrient3;
	}

	public void setNutrient3(String nutrient3) {
		this.nutrient3 = nutrient3;
	}

	public String getNutrient4() {
		return nutrient4;
	}

	public void setNutrient4(String nutrient4) {
		this.nutrient4 = nutrient4;
	}

	public String getNutrient5() {
		return nutrient5;
	}

	public void setNutrient5(String nutrient5) {
		this.nutrient5 = nutrient5;
	}

	public String getNutrient6() {
		return nutrient6;
	}

	public void setNutrient6(String nutrient6) {
		this.nutrient6 = nutrient6;
	}

	public Mexicanfoods(String foodName, String foodImage, double foodStars, String ingredient1,
			String ingredient2, String ingredient3, String ingredient4, String ingredient5, String ingredient6,
			String nutrient1, String nutrient2, String nutrient3, String nutrient4, String nutrient5,
			String nutrient6) {
		this.foodName = foodName;
		this.foodImage = foodImage;
		this.foodStars = foodStars;
		this.ingredient1 = ingredient1;
		this.ingredient2 = ingredient2;
		this.ingredient3 = ingredient3;
		this.ingredient4 = ingredient4;
		this.ingredient5 = ingredient5;
		this.ingredient6 = ingredient6;
		this.nutrient1 = nutrient1;
		this.nutrient2 = nutrient2;
		this.nutrient3 = nutrient3;
		this.nutrient4 = nutrient4;
		this.nutrient5 = nutrient5;
		this.nutrient6 = nutrient6;
	}

	public Mexicanfoods() {
		super();
	}
	
 }
