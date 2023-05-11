const tmdbApi = require("../api/tmdb");
const filterResults = require("../helpers/filterResults");

const getTrendingMovies = async (req, res) => {
    try {
        const response = await tmdbApi.get(`/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`);
        const { results, page, total_pages } = response?.data;
        const trendingMoviesFiltred = filterResults(['title', 'poster_path', 'vote_average', 'id', 'release_date'], results);
        res.status(200).json({ page, total_pages, movies: trendingMoviesFiltred })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const getNewReleasedMovies = async (req, res) => {
    const today = new Date().toISOString().slice(0, 10).toString();
    const nextMonth = new Date(new Date().getTime() + (28 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10).toString();
    try {
        const response = await tmdbApi.get(`/discover/movie?release_date.gte=${today}&release_date.lte=${nextMonth}&language=en&api_key=${process.env.TMDB_API_KEY}`);
        const { results, page, total_pages } = response?.data;
        const newReleasedMoviesFiltered = filterResults(['title', 'poster_path', 'vote_average', 'id', 'release_date'], results);
        // res.status(200).json({ page, movies: newReleasedMoviesFiltered })
        res.status(200).json({page, total_pages, movies: newReleasedMoviesFiltered});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const getActionMovies = async (req, res) => {
    try {
        const response = await tmdbApi.get(`/discover/movie?with_genres=action&language=en&api_key=${process.env.TMDB_API_KEY}`);
        const { results, page, total_pages } = response?.data;
        const actionMoviesFiltered = filterResults(['title', 'poster_path', 'vote_average', 'id', 'release_date'], results);
        res.status(200).json({ page, total_pages, movies: actionMoviesFiltered })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const getAnimatedMovies = async (req, res) => {
    try {
        const response = await tmdbApi.get(`/discover/movie?with_genres=animation&language=en&api_key=${process.env.TMDB_API_KEY}`);
        const { results, page, total_pages } = response?.data;
        const animatedMoviesFiltered = filterResults(['title', 'poster_path', 'vote_average', 'id', 'release_date'], results);
        res.status(200).json({ page, total_pages, movies: animatedMoviesFiltered })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

module.exports = {
    getActionMovies,
    getAnimatedMovies,
    getNewReleasedMovies,
    getTrendingMovies
}