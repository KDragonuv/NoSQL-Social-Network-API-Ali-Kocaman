const Thought = require('../models/thought');

const ReactionController = {
  createReaction: async (req, res) => {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      
      thought.reactions.push({ reactionBody, username });
      await thought.save();

      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  deleteReaction: async (req, res) => {
    const { thoughtId, reactionId } = req.params;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      
      const reactionIndex = thought.reactions.findIndex(reaction => reaction._id.toString() === reactionId);
      if (reactionIndex === -1) {
        return res.status(404).json({ error: 'Reaction not found' });
      }

      
      thought.reactions.splice(reactionIndex, 1);
      await thought.save();

      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = ReactionController;
