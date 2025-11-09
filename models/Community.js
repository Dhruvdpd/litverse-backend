import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true,
    enum: ['Fiction', 'Fantasy', 'Sci-Fi', 'Romance', 'Poetry', 'Horror']
  },
  memberCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Community', communitySchema);