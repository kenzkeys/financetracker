import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    targetAmount: { type: Number, required: true, min: 0 },
    deadline: { type: Date, required: true },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Goal', GoalSchema);