import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TMDBContext = createContext();

//single context provider for get all kind of different movie/tv series lists
export const TMDBProvider = ({ children }) => {

    //movie related states
    const [popularMves, setPopularMves] = useState([]);
    const [inCinemasMves, setInCinemasMves] = useState([]);
    const [comingSoonMves, setComingSoonMves] = useState([]);
    const [trendingNowMves, setTrendingNowMves] = useState([]);

    //get all time popular movie list
    const fetchPopularMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setPopularMves(res.data.results))
            .catch(err => console.error("Error fetching popular movies:", err));
    };

    //get movie list that currently in cinemas
    const fetchInCinemasMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setInCinemasMves(res.data.results))
            .catch(err => console.error("Error fetching in - cinemas movies:", err));
    };

    //get upcoming movie list 
    const fetchComingSoonMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setComingSoonMves(res.data.results))
            .catch(err => console.error("Error fetching coming soon movies:", err));
    };

    //get weekly trending movie list 
    const fetchTrendingMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setTrendingNowMves(res.data.results))
            .catch(err => console.error("Error fetching trending(week) movies:", err));
    };

    //let useeffect fetch them all when rendering
    useEffect(() => { fetchPopularMoviesList(); fetchInCinemasMoviesList(); fetchComingSoonMoviesList(); fetchTrendingMoviesList(); }, []);

    //to ease the passing to children(below) , create a combined object
    const contextValue = {
        popularMves,
        inCinemasMves,
        comingSoonMves,
        trendingNowMves
    }

    //pass all movie lists to childrens who need them
    return (
        <TMDBContext.Provider value={contextValue}>
            {children}
        </TMDBContext.Provider>
    )
}

