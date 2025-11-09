import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsByCommunity = async (req, res) => {
  try {
    const posts = await Post.find({ community: req.params.community });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    community: req.body.community,
    image: req.file ? req.file.filename : null // Handle image if uploaded
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Toggle like if userId is provided
    if (req.body.userId) {
      const userId = req.body.userId;
      if (post.likes.includes(userId)) {
        post.likes = post.likes.filter(id => id !== userId);
      } else {
        post.likes.push(userId);
      }
    }

    // Add a comment if comment content is provided
    if (req.body.comment && req.body.commentAuthor) {
      post.comments.push({
        content: req.body.comment,
        author: req.body.commentAuthor
      });
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

