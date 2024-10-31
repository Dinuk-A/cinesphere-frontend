import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TMDBContext = createContext();

//single context provider for get all kind of different movie/tv series lists
export const TMDBProvider = ({ children }) => {

    //movie related states
    const [topRatedMves, setTopRatedMves] = useState([]);
    const [inCinemasMves, setInCinemasMves] = useState([]);
    const [comingSoonMves, setComingSoonMves] = useState([]);
    // const [trendingNowMves, setTrendingNowMves] = useState([]);

    //get all time top rated movie list
    const fetchTopRatedMoviesList = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => {
                console.log(res.data.results.length);
                setTopRatedMves(res.data.results);
            })
            .catch(err => console.error("Error fetching top rated movies:", err));
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
    // const fetchTrendingMoviesList = () => {
    //     axios
    //         .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
    //         .then(res => setTrendingNowMves(res.data.results))
    //         .catch(err => console.error("Error fetching trending(week) movies:", err));
    // };

    //TV series related states
    const [topRatedTVSs, setTopRatedTVSs] = useState([]);
    const [onAirTVSs, setOnAirTVSs] = useState([]);
    // const [comingSoonTVSs, setComingSoonTVSs] = useState([]);
    // const [trendingNowTVSs, setTrendingNowTVSs] = useState([]);

    //get all time top rated tv series list
    const fetchTopRatedTVSList = () => {
        axios
            .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => {
                console.log(res.data.results.length);
                setTopRatedTVSs(res.data.results);
            })
            .catch(err => console.error("Error fetching top rated TV serieses:", err));
    };

    //get tv series list that currently running in tv
    const fetchOnAirTVSList = () => {
        axios
            .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
            .then(res => setOnAirTVSs(res.data.results))
            .catch(err => console.error("Error fetching currently running tv serieses:", err));
    };

    //get upcoming tv series list
    // const fetchComingSoonTVSList = () => {
    //     axios
    //         .get(`https://api.themoviedb.org/3/tv/upcoming?api_key=${process.env.REACT_APP_JOHN_CENA}&language=en-US&page=1`)
    //         .then(res => setComingSoonTVSs(res.data.results))
    //         .catch(err => console.error("Error fetching coming soon tv serieses:", err));
    // };

    //let useeffect to fetch them all when rendering
    useEffect(() => {
        fetchTopRatedMoviesList();
        fetchInCinemasMoviesList();
        fetchComingSoonMoviesList();
        fetchTopRatedTVSList();
        fetchOnAirTVSList();
        // fetchComingSoonTVSList();
    }, []);

    //to ease the passing to children(below) , create a combined object
    const contextValue = {
        topRatedMves,
        inCinemasMves,
        comingSoonMves,
        topRatedTVSs,
        onAirTVSs,
        // comingSoonTVSs
    }

    //pass all movie lists to childrens who need them
    return (
        <TMDBContext.Provider value={contextValue}>
            {children}
        </TMDBContext.Provider>
    )
}

