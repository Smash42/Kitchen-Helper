export interface Meal {
  id: string;

  title: string;
  meatType: string;
  cookingStyle: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
}

export const mealData: Meal[] = [
  {
    id: "1",
    title: "Birria Tacos",
    meatType: "Beef",
    cookingStyle: "CrockPot",
    ingredients: [
      "- Chuck Roast ",
      "- Green Chile Peppers",
      "- 2 Cups of Beef Broth",
      "- 2 Yellow Onions",
    ],
    instructions:
      "Chop Onions, Season Chuck Roast with Salt Pepper Garlic. Brown the meat in a pan then place in Crock Pot. Saute onions in the same pot, then place in Crock Pot. Cook low 4-6 hours",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Cilantro Lime Chicken",
    meatType: "Chicken",
    cookingStyle: "AirFry",
    ingredients: [
      "- Chicken Breast ",
      "- Panko ",
      "- Lime ",
      "- Honey ",
      "- Garlic ",
    ],
    instructions:
      " Cutlet Chicken Breast with Panko, cook in Air Fryer for 18 mins at 375. Combine Avacado Oil, Garlic, Honey and Lime in small pan simmer for 5 mins. Dip chicken in the pan. Place in Ciabatta bread. ",
    isFavorite: false,
  },
  {
    id: "3",
    title: "Mango Salsa Shrimp Tacos",
    meatType: "Seafood",
    cookingStyle: "Stove",
    ingredients: [
      "- 1 lb. of Shrimp ",
      "- 2 Cups Mango Salsa ",
      "- Carb Balance Tortilla ",
      "- Cilantro ",
    ],
    instructions:
      "Saute Shrimp for 6-8 mins, flipping once. Place shrimp into Tortilla with Mango Salsa. Top with Cilantro as necessary ",
    isFavorite: false,
  },
];
