import { useContext } from "react";
import { Link } from "react-router-dom";
import { TMDBContext } from "../contexts/TMDBContext";
import defaultPoster from '../assets/images/default-movie-poster.jpg';
import { BookmarkPlus, Eye } from 'lucide-react';

const ComingSoonMovies = ({ limit = 4, allView = false }) => {
    const { comingSoonMves } = useContext(TMDBContext);

    if (!comingSoonMves.length) {
        return <p className="text-center text-white">Loading Coming Soon Movies...</p>;
    }

    const displayMves = allView ? comingSoonMves : comingSoonMves.slice(0, limit);

    const handleWatchlist = (e, movieId) => {
        e.preventDefault();
        console.log('Added to watchlist:', movieId);
    };

    const handleSeen = (e, movieId) => {
        e.preventDefault();
        console.log('Marked as seen:', movieId);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                {allView ? 'All Coming Soon Movies' : 'Coming Soon Movies'}
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayMves.map((mve) => (
                    <li
                        key={mve.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[24rem] relative group transition transform hover:scale-105 hover:bg-gray-700"
                    >
                        <Link to={`/movie/${mve.id}`} className="flex flex-col h-full">
                            <div className="relative h-full">
                                <img
                                    src={mve.poster_path ? `https://image.tmdb.org/t/p/w500${mve.poster_path}` : defaultPoster}
                                    alt={mve.original_title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-75 p-3 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between text-white">
                                    <div>
                                        <h3 className="text-lg font-bold">{mve.title}</h3>
                                        <p className="text-sm mt-1">By: {mve.director || "Unknown Director"}</p>
                                        <p className="text-xs mt-2">{mve.overview || "No description available."}</p>
                                    </div>
                                    <div className="flex flex-col justify-between mt-2">
                                        <button
                                            onClick={(e) => handleWatchlist(e, mve.id)}
                                            className="flex ml-auto justify-center my-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 w-3/4"
                                            title="Add to Watchlist"
                                        >
                                            <BookmarkPlus className="w-5 h-5 mr-1" />
                                            <span className="text-xs">Watchlist</span>
                                        </button>
                                        <button
                                            onClick={(e) => handleSeen(e, mve.id)}
                                            className="flex ml-auto justify-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 w-3/4"
                                            title="Mark as Seen"
                                        >
                                            <Eye className="w-5 h-5 mr-1" />
                                            <span className="text-xs">Seen</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            {!allView && (
                <div className="text-right mt-6">
                    <Link
                        to="/soonmovie"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Explore More Movies
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ComingSoonMovies;
