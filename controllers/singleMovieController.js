const tmdbApi = require("../api/tmdb");
const filterResults = require("../helpers/filterResults");



const handleSingleMovie = async (req, res) => {
    console.log(req.params);
    try {
        const response = await tmdbApi.get(`/movie/${req.params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
        console.log("RESPONSE: ",response?.data);
        const filteredMovieDetails = filterResults(["title", "poster_path", "vote_average", "id", "release_date", "overview","backdrop_path","generes","budget","homepage","original_title","revenue","status","vote_count"], response?.data);
        res.status(200).json({ movie: filteredMovieDetails })
    } catch (error) {
        // console.log("Error getting movie details", error);
        res.sendStatus(500);
    }
}

module.exports = {
    handleSingleMovie
}