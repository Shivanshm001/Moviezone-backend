require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//Routers
const rootRouter = require('./routes/root');
const searchRouter = require('./routes/search');
const singleMovieRouter = require('./routes/movie');


//Api
const tmdbApi = require('./api/tmdb');

// app.use("/public", express.static(path.join(__dirname, "public")));
//Middleware

app.use(cors());

//Routes
app.use("/", rootRouter);
app.use("/search", searchRouter);
app.use("/movie", singleMovieRouter);



app.get("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
})
//Start server
const PORT = process.env.PORT || process.env.LOCAL_PORT
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
});