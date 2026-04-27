export const fetchDrinks = async ({ query = "" } = {}) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data.drinks ?? [];
};

export const fetchDrinkById = async (id: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch drink details");
  }

  const data = await response.json();

  return data.drinks?.[0] ?? null;
};

export const fetchMeals = async ({ query = "" } = {}) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data.meals ?? [];
};

export const fetchMealById = async (id: string) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch drink details");
  }

  const data = await response.json();

  return data.meals?.[0] ?? null;
};
