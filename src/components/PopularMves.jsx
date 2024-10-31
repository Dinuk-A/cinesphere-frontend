import { useContext } from "react";
import { TMDBContext } from "../contexts/TMDBContext";
import { Link } from "react-router-dom";
import defaultPoster from '../assets/images/default-movie-poster.jpg';

//THIS COMPONENT SHOWS A MOVIE LIST THAT POPULAR ALL TIME(DECIDED BY RATINGS OF ALL TIME)

//INCLUDE A EXPLORE MORE BUTTON BELOW THE LIST TO ROUTE TO A PAGE WHERE USER CAN FILTER MOVIES 💥
const PopularMves = () => {
    const popularMves = useContext(TMDBContext);

    if (!popularMves.length) {
        return <p className="text-center">Loading movies...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Popular Movies</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularMves.map((mve) => (
                    <li key={mve.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Link to={`/movie/${mve.id}`}> {/* Link to OneMve */}
                            <img
                                src={mve.poster_path ? `https://image.tmdb.org/t/p/w500${mve.poster_path}` : defaultPoster}
                                alt={mve.original_title}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-stone-800">{mve.title}</h3>
                                <p className="text-gray-600">{mve.release_date}</p>
                                <p className="text-yellow-500 font-bold">Rating: {mve.vote_average} / 10</p>
                                <div className="max-h-24 mt-2 bg-yellow-100 p-2 rounded">
                                    <p className="text-gray-800 overflow-hidden text-ellipsis" title={mve.overview}>
                                        {mve.overview}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularMves;
