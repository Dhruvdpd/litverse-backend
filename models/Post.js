import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  likes: [{
    type: String, // store userId of who liked
    required: true
  }],
  comments: [commentSchema],
  community: {
    type: String,
    default: 'poetry',
    ref: 'Community'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String, // Store the image path or URL
    default: ''
  }
});

export default mongoose.model('Post', postSchema);
