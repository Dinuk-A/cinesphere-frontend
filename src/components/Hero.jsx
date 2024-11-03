import React, { useContext } from 'react';
import { TMDBContext } from '../contexts/TMDBContext';

const HeroSection = () => {
    const { comingSoonMves } = useContext(TMDBContext);
    const featuredMve = comingSoonMves[0] || {};

    return (
        <div className='relative mx-10 mt-4 p-4 bg-black text-white h-2/3 flex items-center justify-center '>
            <div className="absoulute inset-0">

                {featuredMve.backdrop_path ? (<img
                    src={`https://image.tmdb.org/t/p/original${featuredMve.backdrop_path}`}
                    alt={featuredMve.title}
                    className="w-full h-full object-cover opacity-80" />) : null}
            </div>
            <div className="relative text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">{featuredMve.title || "FeaturedMovie"}</h1>
                <p className="mb-6">{featuredMve.overview || "Ashortsynopsis of the featured movie goes here."}</p>
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full mr
-2">Watch Now</button>
                <button className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-full">Add to Watchlist</button>
            </div>

        </div>
    )
}

export default HeroSection;