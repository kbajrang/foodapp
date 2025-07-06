const foods = [
  'Idli',
  'Paneer Butter Masala',
  'Biryani',
  'Samosa',
  'Dosa',
  'Chole Bhature',
  'Vada Pav',
  'Rajma',
  'Aloo Paratha',
  'Poha',
  'Upma',
  'Pav Bhaji',
  'Chicken Curry',
  'Dal Makhani',
  'Kheer',
  'Palak Paneer',
  'Masala Dosa',
  'Gulab Jamun',
  'Rasgulla',
  'Fish Curry'
];

export const classifyFood = async (_imagePath: string): Promise<{ foodType: string }> => {
  const foodType = foods[Math.floor(Math.random() * foods.length)];
  return { foodType };
};
