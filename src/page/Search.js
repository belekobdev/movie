import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import MovieCard from "../../src/components/MovieCard";
import {API_KEY} from "../API/api";
import {LanguageContext} from "../context";

const Search = () => {
    const [searchMovie, setSearchMovie] = useState([])
    const {movieName} = useParams()
    const {background} = useContext(LanguageContext)

    const getSetSearchMovie = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                setSearchMovie(res.data.results)
            })
    }
    useEffect(() => {
        getSetSearchMovie(API_KEY)
    }, [movieName])
    console.log(searchMovie)
    return (
        <div id="popular" style={{
            color: background === true ? "black" : "white",
            background: background === true ? "black" : "white",
        }}>
            <div className="container">
                <div className="popular">
                    {
                        searchMovie.map((el) => {
                            return (
                                <MovieCard el={el} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};
export default Search;