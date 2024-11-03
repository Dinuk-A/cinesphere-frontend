import React, { useContext, useEffect, useState } from 'react';
import { TMDBContext } from '../contexts/TMDBContext';
import logo from '../assets/images/logo.png';

const HeroSection = () => {
    const { trendingNowMves } = useContext(TMDBContext);
    const featuredMve = trendingNowMves[0] || {};
    const [additionalImages, setAdditionalImages] = useState([]);
    const backgroundImage = featuredMve.backdrop_path
        ? `https://image.tmdb.org/t/p/original${featuredMve.backdrop_path}`
        : logo;

    useEffect(() => {
        if (featuredMve.id) {
            fetch(`https://api.themoviedb.org/3/movie/${featuredMve.id}/images?api_key=${process.env.REACT_APP_JOHN_CENA}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdditionalImages(data.backdrops || []);
                });
        }
    }, [featuredMve]);

    const topRightImage = additionalImages.length > 1 ? additionalImages[1].file_path : null;

    return (
        <div
            className="relative flex flex-col items-center justify-center text-white bg-black bg-cover bg-center mt-1 mx-10"
            style={{ backgroundImage: `url(${backgroundImage})`, height: '100%', backgroundSize: 'cover' }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-start space-y-3 md:flex-row md:space-y-0 md:items-center md:justify-between md:space-x-6">
                {/* Left Side - Info */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text h-full py-2">
                        Trending Now
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {featuredMve.title || "Featured Movie"}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        {featuredMve.overview || "A short synopsis of the featured movie goes here."}
                    </p>
                </div>

                {/* Right Side - Additional Image */}
                <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                    {topRightImage && (
                        <img
                            src={`https://image.tmdb.org/t/p/original${topRightImage}`}
                            alt={featuredMve.title}
                            className="w-full md:w-3/4 rounded-lg shadow-lg border-4 border-white hover:scale-110 transition 5s"
                        />
                    )}
                </div>
            </div>

            {/* Explore More Button */}
            <div className="relative z-10 flex justify-end w-full container mb-3 px-20 mr-1 md:pl-8 py-5">
                <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300 text-lg font-semibold">
                    Explore More Trending Movies
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
