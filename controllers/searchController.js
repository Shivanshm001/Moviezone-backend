const tmdbApi = require("../api/tmdb");
const filterResults = require("../helpers/filterResults");
const handleSearch = async (req, res) => {
    const { name, p } = req.query;
    try {
        const { data } = await tmdbApi.get(`/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${name}`);
        const { results, page, total_pages } = data;

        const searchedMoviesFiltered = filterResults(['title', 'poster_path', 'vote_average', 'id'], results);

        res.status(200).json({ page, total_pages, movies: searchedMoviesFiltered })

    } catch (error) {
        console.log(error)
        res.send(500).json({ error: error?.message});
    }
}

module.exports = {
    handleSearch
}