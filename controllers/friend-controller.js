const User = require('../models/user');

const FriendController = {
  addFriend: async (req, res) => {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const friend = await User.findById(friendId);
      if (!friend) {
        return res.status(404).json({ error: 'Friend not found' });
      }

      // Check if friend is already in the user's friends list
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ error: 'Friend already added' });
      }

       // Add friend to user's friends list
      user.friends.push(friendId);
      await user.save();

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  removeFriend: async (req, res) => {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Find index of friend in user's friends list
      const friendIndex = user.friends.indexOf(friendId);
      if (friendIndex === -1) {
        return res.status(404).json({ error: 'Friend not found in user\'s list' });
      }

      // Remove friend from user's friends list
      user.friends.splice(friendIndex, 1);
      await user.save();

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = FriendController;
