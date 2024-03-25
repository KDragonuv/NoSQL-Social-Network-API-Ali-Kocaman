const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thought-controller');

// CRUD operations for thoughts
router.get('/', ThoughtController.getAllThoughts);
router.get('/:thoughtId', ThoughtController.getThoughtById);
router.post('/', ThoughtController.createThought);
router.put('/:thoughtId', ThoughtController.updateThought);
router.delete('/:thoughtId', ThoughtController.deleteThought);

module.exports = router;