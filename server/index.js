import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import transactionsRouter from './routes/transactions.js';
import goalsRouter from './routes/goals.js';


dotenv.config();


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));


app.get('/api/health', (_, res) => res.json({ status: 'ok' }));


app.use('/api/transactions', transactionsRouter);
app.use('/api/goals', goalsRouter);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/finance_tracker';


mongoose
.connect(MONGO_URI)
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
.catch((err) => {
console.error('MongoDB connection error:', err.message);
process.exit(1);
});
