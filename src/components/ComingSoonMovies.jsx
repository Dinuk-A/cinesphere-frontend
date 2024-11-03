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

        <div className=" relative flex flex-col items-center justify-center text-white bg-black mt-3 mx-10">
            <div className="relative z-10 container mx-auto px-4 py-2">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text h-full py-2">
                    Coming Soon Movies
                </h2>
            </div>

            <div className={`grid gap-6 w-full ${allView ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                {displayMves.map((mve) => (
                    <div
                        key={mve.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[24rem] relative group transition transform hover:scale-105 hover:bg-gray-700"
                    >
                        <Link to={`/movie/${mve.id}`} className="flex flex-col h-full">
                            <div className="relative h-full flex flex-col">
                                <img
                                    src={mve.poster_path ? `https://image.tmdb.org/t/p/w500${mve.poster_path}` : defaultPoster}
                                    alt={mve.original_title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-75 p-3 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between text-white">
                                    <div>
                                        <h3 className="text-lg font-bold">{mve.title}</h3>
                                        <p className="text-sm mt-1">By: {mve.director || "Unknown Director"}</p>
                                        <p className="text-xs mt-2 line-clamp-4">{mve.overview || "No description available."}</p>
                                    </div>
                                    <div className="flex flex-col justify-between mt-2">
                                        <button
                                            onClick={(e) => handleWatchlist(e, mve.id)}
                                            className="flex items-center justify-center my-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 w-full"
                                            title="Add to Watchlist"
                                        >
                                            <BookmarkPlus className="w-5 h-5 mr-1" />
                                            <span className="text-xs">Watchlist</span>
                                        </button>
                                        <button
                                            onClick={(e) => handleSeen(e, mve.id)}
                                            className="flex items-center justify-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 w-full"
                                            title="Mark as Seen"
                                        >
                                            <Eye className="w-5 h-5 mr-1" />
                                            <span className="text-xs">Seen</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {!allView && (
                <div className="relative z-10 flex justify-end w-full container mt-8">
                    <Link to="/soonmovie">
                        <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300 text-lg font-semibold">
                            Explore More Coming Soon Movies
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ComingSoonMovies;