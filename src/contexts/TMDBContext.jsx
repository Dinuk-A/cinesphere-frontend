import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TMDBContext = createContext();

export const TMDBProvider = ({ children }) => {
    const [popularMves, setPopularMves] = useState([]);

    const fetchPopularMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setPopularMves(res.data.results))
            .catch(err => console.error("Error fetching popular movies:", err));
    };

    useEffect(() => { fetchPopularMoviesList() }, [popularMves]);

    return (
        <TMDBContext.Provider value={popularMves}>
            {children}
        </TMDBContext.Provider>
    )
}

