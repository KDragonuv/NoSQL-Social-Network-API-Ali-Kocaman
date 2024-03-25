const express = require('express');
const router = express.Router();

// Import controllers
const UserController = require('../controllers/user-controller');
const ThoughtController = require('../controllers/thought-controller');
const ReactionController = require('../controllers/reaction-controller');
const FriendController = require('../controllers/friend-controller');

// Define routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:userId', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

router.get('/thoughts', ThoughtController.getAllThoughts);
router.get('/thoughts/:thoughtId', ThoughtController.getThoughtById);
router.post('/thoughts', ThoughtController.createThought);
router.put('/thoughts/:thoughtId', ThoughtController.updateThought);
router.delete('/thoughts/:thoughtId', ThoughtController.deleteThought);

router.post('/thoughts/:thoughtId/reactions', ReactionController.createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', ReactionController.deleteReaction);

router.post('/users/:userId/friends/:friendId', FriendController.addFriend);
router.delete('/users/:userId/friends/:friendId', FriendController.removeFriend);

module.exports = router;
