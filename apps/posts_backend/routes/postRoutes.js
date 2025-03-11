import express from 'express';
import { createPost, getPosts, getPostById } from '../controllers/postController.js';
import protect from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post("/create", protect, createPost);

export default router;