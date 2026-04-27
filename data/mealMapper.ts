export interface Meal {
  id: number;
  title: string;
  meatType: string;
  cookingStyle: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
  image?: string;
}

export const mapMealToMeal = (meal: any): Meal => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure.trim() : ""} ${ingredient}`.trim());
    }
  }

  return {
    id: Number(meal.idMeal),
    title: meal.strMeal,
    meatType: meal.strCategory,
    cookingStyle: meal.strArea, // closest match
    instructions: meal.strInstructions,
    ingredients,
    isFavorite: false,
    image: meal.strMealThumb,
  };
};
