const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        plot: String,
        genres: String,
        runtime: Number,
        cast: String,
        poster: String,
        title: String,
        fullplot: String,
        languages: String,
        released: String,
        directors: String,
        rated: String,
        awards: {
            wins: Number,
            nominations: Number,
            text: String
        },
        lastupdated: String,
        year: Number,
        imdb: {
            rating: Number,
            votes: Number,
            id: Number
        },
        countries: String,
        type: String,
        tomatoes: {
            viewer: {
                rating: Number,
                numReviews: Number,
                meter: Number
            },
            fresh: Number,
            critic: {
                rating: Number,
                numReviews: Number,
                meter: Number
            },
            rotten: Number,
            lastUpdated: String
        }
    }
    
)

const collect = mongoose.model('movie',movieSchema,'movie')

//savedata
const savemovie = async(data)=>
{
    const newmovie = new collect(data)
    const savemovie = await newmovie.save()
    return savemovie
}

//1. Find all movies with full information from the 'movies' collection that released in the year 2000.
const getdata1 = async(data)=>
{
    const get = await collect.find({year:data.year})
    return get
}

//2. Find all movies with full information from the 'movies' collection that have a runtime greater than 120 minutes
const getdata2 = async(data)=>
{
    const get = await collect.find({runtime:{$gt:120}})
    return get
}

//3. Find all movies with full information from the 'movies' collection that have "Action" genre.
const getdata3 = async(data)=>
{
    const get = await collect.find({genres:data.genres})
    return get
}

//4.Retrieve all movies from the 'movies' collection that were directed by "AR Murugadoss" and include complete information for each movie.
const getdata4 = async(data)=>
{
    const get = await collect.find({directors:data.directors})
    return get
}

//5. Retrieve all movies from the 'movies' collection that were released in the India and include complete information for each movie.
const getdata5 = async(data)=>
{
    const get = await collect.find({countries:data.countries})
    return get
}

//6. Retrieve all movies from the 'movies' collection that have complete information and are rated as "UNRATED".
const getdata6 = async(data)=>
{
    const get = await collect.find({rated:data.rated})
    return get
}

//7. Retrieve all movies from the 'movies' collection that have complete information and have received more than 1000 votes on IMDb.
const getdata7 = async(data)=>
{
    const get = await collect.find({"imdb.votes":{$gt : 1000}})
    return get
}

//8. Retrieve all movies from the 'movies' collection that have complete information and have an IMDb rating higher than 7.
const getdata8 = async(data)=>
{
    const get = await collect.find({"imdb.rating":{$gt : 7}})
    return get
}

//9. Retrieve all movies from the 'movies' collection that have complete information and have a viewer rating higher than 4 on Tomatoes.
const getdata9 = async(data)=>
{
    const get = await collect.find({"tomatoes.viewer.rating":{$gt : 4}})
    return get
}

//10. Retrieve all movies from the 'movies' collection that have received an award.
const getdata10 = async(data)=>
{
    const get = await collect.find({"awards.wins":{$gt : 0}})
    return get
}

//11. Find all movies with title, languages, released, directors, writers, awards, year, genres, runtime, cast, countries from the 
//'movies' collection in MongoDB that have at least one nomination

/*const getdata11 = async(data)=>
{
    const get = await collect.find({"awards.nominations" : { $gt: 0}},{title:data.title,languages:data.languages,released:data.released,directors:data.directors,year:data.year,genres:data.genres,runtime:data.runtime,cast:data.cast,countries:data.countries})
    return get
}*/

const getdata11 = async(data)=>
{
    const get = await collect.find({ "awards.nominations": { $gt: 0 } }, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "awards": 1, "year": 1, "genres": 1, "runtime": 1, "cast": 1, "countries": 1 });
    return get
}
const getdata11try = async(data)=>
{
    const nomi = data.awards.nominations
    const get = await collect.find({nominations:{ $gt: nomi}},{ "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "awards": 1, "year": 1, "genres": 1, "runtime": 1, "cast": 1, "countries": 1 });
    return get
}

//12. Find all movies with title, languages, released, directors, writers, awards, year, genres, runtime, cast, countries from the
//'movies' collection in MongoDB with cast including "Alia Bhatt".

const getdata12 = async(data)=>
{
    const get = await collect.find({ cast:data.cast }, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "awards": 1, "year": 1, "genres": 1, "runtime": 1, "cast": 1, "countries": 1 });
    return get
}

//13. Retrieve all movies with title, languages, released, directors, writers, countries from the 'movies' collection in MongoDB
// that released on 2022-09-08
const getdata13 = async(data)=>
{
    const get = await collect.find({released:data.released}, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//14. Retrieve all movies with title, languages, released, directors, writers, countries from the 'movies' collection in MongoDB 
//that have a word "Friend" in the title.
const getdata14 = async(data)=>
{
    const get = await collect.find({"title": /Friend/i}, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//15. Find all movies with title, languages, released, directors, viewer, writers, countries from the 'movies' collection in MongoDB
// that have a viewer rating of at least 3 and less than 4 on Tomatoes.
const getdata15 = async(data)=>
{
    const get = await collect.find({"tomatoes.viewer.rating": { $gte: 3, $lt: 4}}, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//16. Retrieve all movies with title, languages, released, year, directors, writers, countries from the 'movies' collection in MongoDB 
//that released before the year 2015.
const getdata16 = async(data)=>
{
    const get = await collect.find({"year": {$lt : 2015 }}, { "title": 1, "languages": 1, "released": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//17. Find all movies with title, languages, fullplot, released, directors, writers, countries from the 'movies' collection in MongoDB 
//that have a fullplot containing the word "love".
const getdata17 = async(data)=>
{
    const get = await collect.find({"fullplot":/love/i}, { "title": 1, "languages": 1, "released": 1,"fullplot": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//18. Return all movies with title, languages, plot, released, directors, writers, and countries from the 'movies' collection in MongoDB 
//where the word "fight" mentioned in the plot
const getdata18 = async(data)=>
{
    const get = await collect.find({"plot":/fight/i}, { "title": 1, "languages": 1, "released": 1,"plot": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//19. Return all movies with title, languages, fullplot, released, directors, writers, and countries from the 'movies' collection in MongoDB 
//where the word "metal" mentioned in the fullplot.
const getdata19 = async(data)=>
{
    const get = await collect.find({"plot":/love/i}, { "title": 1, "languages": 1, "released": 1,"fullplot": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}


//20. Find all movies with title, languages, released, runtime, directors, writers, countries from the 'movies' collection in MongoDB 
//that have a runtime between 60 and 90 minutes.
const getdata20 = async(data)=>
{
    const get = await collect.find({"runtime": { $gte: 60, $lte: 90 }}, { "title": 1, "languages": 1, "released": 1,"fullplot": 1, "directors": 1, "writers": 1, "countries": 1 });
    return get
}

//21. Find all movies with title, languages, released, runtime, directors, writers, countries, imdb from the 'movies' collection in MongoDB
//for the top 5 movies with the highest IMDb ratings.
const getdata21 = async(data)=>
{
    const get = await collect.find({}, { "title": 1, "languages": 1, "released": 1, "runtime": 1, "directors": 1, "writers": 1, "countries": 1, "imdb": 1 })
    .sort({ "imdb.rating": -1 })
    .limit(5);
    return get
}

//22. Find all movies from the 'movies' collection in MongoDB with the average runtime of movies released in each country.
const getdata22 = async(data)=>
{
    const get = await collect.aggregate([{ $group: { _id: "$rated", averageRating: { $avg: "$imdb.rating" } } }]);
    return get
}

//23. Find from the 'movies' collection in MongoDB with the most common genre among the movies.
const getdata23 = async(data)=>
{
    const get = await collect.aggregate([
        { $unwind: "$genres" },
        { $group: { _id: "$genres", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
    ]);
    return get
}







module.exports=
{
    savemovie,
    getdata1,
    getdata2,
    getdata3,
    getdata4,
    getdata5,
    getdata6,
    getdata7,
    getdata8,
    getdata9,
    getdata10,
    getdata11,
    getdata12,
    getdata13,
    getdata14,
    getdata15,
    getdata16,
    getdata17,
    getdata18,
    getdata19,
    getdata20,
    getdata21,
    getdata22,
    getdata23,
    getdata24
}