const axios = require('axios');

const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

module.exports = tmdbApi;