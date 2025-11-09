import Community from '../models/Community.js';

export const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommunityByTopic = async (req, res) => {
  try {
    const communities = await Community.find({ topic: req.params.topic });
    res.json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommunity = async (req, res) => {
  try {
    const community = await Community.findOne({ name: req.params.name });
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};