function filterResults(propertiesToFilter, movies) {
    if (Array.isArray(movies)) {
        return movies.map(movie => {
            const filteredResult = Object.keys(movie)
                .filter(key => propertiesToFilter.includes(key))
                .reduce((filtered, key) => {
                    filtered[key] = movie[key];
                    return filtered;
                }, {}); //Reduce method ends 
            return filteredResult;
        }); //Map method ends
    } else {
        const filteredResult = Object.keys(movies)
            .filter(key => propertiesToFilter.includes(key))
            .reduce((filtered, key) => {
                filtered[key] = movies[key];
                return filtered;
            }, {}); //Reduce method ends
        return filteredResult;
    }
};



module.exports = filterResults;