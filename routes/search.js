const searchController = require('../controllers/searchController');

const router = require('express').Router();

router.route("/").get(searchController.handleSearch);

module.exports = router;