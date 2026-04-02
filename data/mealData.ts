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

export const mealData: Meal[] = [
  {
    id: 1,
    title: "Birria Tacos",
    meatType: "Beef",
    cookingStyle: "CrockPot",
    ingredients: [
      "Chuck Roast ",
      "Green Chile Peppers",
      "2 Cups of Beef Broth",
      "2 Yellow Onions",
    ],
    instructions:
      "Chop Onions, Season Chuck Roast with Salt Pepper Garlic. Brown the meat in a pan then place in Crock Pot. Saute onions in the same pot, then place in Crock Pot. Cook low 4-6 hours",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Cilantro Lime Chicken",
    meatType: "Chicken",
    cookingStyle: "AirFry",
    ingredients: ["Chicken Breast ", "Panko ", "Lime ", "Honey ", "Garlic "],
    instructions:
      " Cutlet Chicken Breast with Panko, cook in Air Fryer for 18 mins at 375. Combine Avacado Oil, Garlic, Honey and Lime in small pan simmer for 5 mins. Dip chicken in the pan. Place in Ciabatta bread. ",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Mango Salsa Shrimp Tacos",
    meatType: "Seafood",
    cookingStyle: "Stove",
    ingredients: [
      "1 lb. of Shrimp ",
      "2 Cups Mango Salsa ",
      "Carb Balance Tortilla ",
      "Cilantro ",
    ],
    instructions:
      "Saute Shrimp for 6-8 mins, flipping once. Place shrimp into Tortilla with Mango Salsa. Top with Cilantro as necessary ",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Enchiladas",
    meatType: "Chicken",
    cookingStyle: "Stove",
    ingredients: [
      "Can of Black Beans",
      "Roma Tomato",
      "Shredded Chicken",
      "1 Yellow Onions",
      "Carb Balance Wraps",
    ],
    instructions:
      "Chop Onions and Roma Tomatoes, Season Chicken with Chili Lime seasoning. Drain the juice from the beans, but save separetly.  In a medium saute pan, put half the beans, all the tomatoes and onions and saute for about 5 minutes, or until the onions are soft. Add about 2 tbsp bean juice. Cook remaining beans in a small pot, mash after 5 minutes. Place a scoop of filling, some chicken onto a wrap. Roll up and place into pan. Cook at 400 or 5 mins.  ",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Shrimp Scampi",
    meatType: "Seafood",
    cookingStyle: "Stove",
    ingredients: [
      "1 lb. of Shrimp ",
      "3 Garlic Cloves ",
      "1 box Protein Pasta ",
      "2 Lemons",
    ],
    instructions:
      "Boil a pot of water for the pasta. Add noodles when boiling and cook for time as mentioned on the box. Mince the Garlic. Saute Shrimp for 6-8 mins in minced garlic, oil, and juice from 1/2 a lemon, flipping once. Add the Pasta to the pan with the shrimp, add juice from the other half of the lemon. Toss together and serve. ",
    isFavorite: false,
  },
];
