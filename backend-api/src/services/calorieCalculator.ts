import calories from '../data/calories.json';

type Item = { food: string; caloriesPer100g: number };

export const calculateCalories = (foodType: string, weight: number): number => {
  const item = (calories as Item[]).find(
    (c) => c.food.toLowerCase() === foodType.toLowerCase(),
  );
  const per100 = item ? item.caloriesPer100g : 100;
  return Math.round((per100 / 100) * weight);
};
