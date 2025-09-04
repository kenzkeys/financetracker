import { Router } from 'express';
import Goal from '../models/Goal.js';

const router = Router();

// Create a new goal
router.post('/', async (req, res) => {
  try {
    const { name, targetAmount, deadline, description } = req.body;
    const goal = await Goal.create({ name, targetAmount, deadline, description });
    res.status(201).json(goal);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Get all goals
router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find().sort({ deadline: 1, createdAt: -1 });
    res.json(goals);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Update a goal
router.put('/:id', async (req, res) => {
  try {
    const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;