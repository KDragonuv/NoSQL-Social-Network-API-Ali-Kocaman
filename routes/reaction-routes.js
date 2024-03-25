const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/reaction-controller');

// CRUD operations for reactions
router.post('/:thoughtId/reactions', ReactionController.createReaction);
router.delete('/:thoughtId/reactions/:reactionId', ReactionController.deleteReaction);

module.exports = router;