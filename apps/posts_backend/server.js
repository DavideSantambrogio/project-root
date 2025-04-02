import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import connectDB from '../../shared/utils/connectDB.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;

// Middleware per parsare il corpo delle richieste
app.use(express.json());

// Connessione al database
connectDB();

// Rotte post
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
