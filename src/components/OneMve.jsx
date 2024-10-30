import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import defaultPoster from '../assets/images/default-movie-poster.jpg';

const OneMve = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);
    
    const fetchMovieDetails = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US`)
            .then(res => setMovie(res.data))
            .catch(err => console.error("Error fetching movie details:", err));
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <p className="text-center">Loading movie details...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
                <img 
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultPoster} 
                    alt={movie.original_title} 
                    className="w-full h-auto rounded-lg mb-4" 
                />
            </div>
            {/* Right Side: Movie Details */}
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-600">Release Date: {movie.release_date}</p>
                <p className="text-yellow-500 font-bold">Rating: {movie.vote_average} / 10</p>
                <h3 className="mt-4 text-lg font-semibold">Overview:</h3>
                <p className="text-gray-800">{movie.overview}</p>
            </div>
        </div>
    );
};

export default OneMve;
