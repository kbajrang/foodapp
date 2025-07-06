import { Request, Response } from 'express';
import path from 'path';
import { classifyFood } from '../services/classifier';
import { calculateCalories } from '../services/calorieCalculator';

export const handleUpload = async (req: Request, res: Response) => {
  const weight = Number(req.body.weight);
  const filePath = path.join(__dirname, '../../', req.file?.path || '');

  try {
    const { foodType } = await classifyFood(filePath);
    const estimatedCalories = calculateCalories(foodType, weight);
    res.json({ foodType, estimatedWeight: weight, estimatedCalories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Processing failed' });
  }
};
