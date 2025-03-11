import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    user: req.user.id, 
  });

  await post.save();
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post non trovato' });
  }
  res.json(post);
};
