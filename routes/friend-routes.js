const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friend-controller');

// Friend management operations
router.post('/:userId/friends/:friendId', FriendController.addFriend);
router.delete('/:userId/friends/:friendId', FriendController.removeFriend);

module.exports = router;