import { useContext } from "react";
import { Link } from "react-router-dom";
import { TMDBContext } from "../contexts/TMDBContext";
import defaultPoster from '../assets/images/default-movie-poster.jpg';

const TopRatedMovies = ({limit = 4, allView = false}) => {

    const { topRatedMves } = useContext(TMDBContext);

    if (!topRatedMves.length) {
        return <p className="text-center">Loading Top Rated movies...</p>;
    }

    const displayMves = allView ? topRatedMves : topRatedMves.slice(0, limit);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
                {allView ? 'All Top Rated Movies' : 'Top Rated Movies'}
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayMves.map((mve) => (
                   <li
                   key={mve.id}
                   className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-80 relative group transition transform hover:scale-105 hover:bg-gray-700"
                 >
                   <Link to={`/movie/${mve.id}`} className="flex flex-col h-full">
                     <img
                       src={mve.poster_path ? `https://image.tmdb.org/t/p/w500${mve.poster_path}` : defaultPoster}
                       alt={mve.original_title}
                       className="w-full h-3/4 object-fit"
                     />
                     <div className="p-2 h-1/4 flex items-center justify-center text-white">
                       <h3 className="text-lg font-semibold">{mve.title}</h3>
                     </div>
                     <div className="absolute inset-0 bg-gray-800 bg-opacity-90 p-4 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center text-white">
                       <h3 className="text-lg font-semibold">{mve.title}</h3>
                       <p className="text-sm mt-1">By: {mve.directorName || "Unknown Director"}</p>
                       <p className="text-xs mt-2 overflow-hidden text-ellipsis">
                         {mve.overview ? mve.overview.slice(0, 80) + "..." : "No description available."}
                       </p>
                     </div>
                   </Link>
                 </li>
                 
                ))}
            </ul>

            {/* "See More" Link for Preview */}
            {!allView && (
                <div className="text-right mt-6">
                    <Link
                        to="/toprated"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Explore More Movies
                    </Link>
                </div>
            )}
        </div>
    );

}

export default TopRatedMovies;