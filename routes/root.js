const router = require('express').Router();
const rootController = require('../controllers/rootController');


router.route("/api/v1/trending").get(rootController.getTrendingMovies);
router.route("/api/v1/released").get(rootController.getNewReleasedMovies);
router.route("/api/v1/action").get(rootController.getActionMovies);
router.route("/api/v1/animated").get(rootController.getAnimatedMovies);

module.exports = router;