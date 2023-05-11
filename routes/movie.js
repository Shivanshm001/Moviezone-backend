const router = require('express').Router();
const singleMovieController = require('../controllers/singleMovieController');

router.route("/:id").get(singleMovieController.handleSingleMovie);

module.exports = router;