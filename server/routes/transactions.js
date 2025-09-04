import { Router } from 'express';
import Transaction from '../models/Transaction.js';
import { toCSV } from '../utils/csv.js';

const router = Router();

// Create
router.post('/', async (req, res) => {
  try {
    const { type, amount, category, date, note } = req.body;
    const tx = await Transaction.create({ type, amount, category, date, note });
    res.status(201).json(tx);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Read (with filters)
router.get('/', async (req, res) => {
  try {
    const { from, to, category } = req.query;
    const query = {};
    if (category) query.category = category;
    if (from || to) {
      query.date = {};
      if (from) query.date.$gte = new Date(from);
      if (to) query.date.$lte = new Date(to);
    }
    const items = await Transaction.find(query).sort({ date: -1, createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;