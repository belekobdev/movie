import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context";


const TopRated = () => {
    const [rated, setRated] = useState([])
    // const array = [1,2,3,4,5,6,7,8,9,10]
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const {background} = useContext(LanguageContext)

    const getRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
                setRated(res.data.results)
            })
    }
    const open = () => {
        window.scroll(0,0)
    }
    useEffect(() => {
        getRated(API_KEY)
    }, [rated, page, language])
    return (
        <div id="rated" style={{
            color: background === true ? "black" : "white",
            background: background === true ? "black" : "white",
        }}>
            <div className="container">
                <div className="rated">
                    {
                        rated.map((el) => {
                            return (
                                <MovieCard el={el}/>
                            )
                        })
                    }
                </div>
                <div className="top--pages">
                    {/*{*/}
                    {/*    array.map((el) => (*/}
                    {/*        <button onClick={() => setPage(el)}>{el}</button>*/}
                    {/*    ))*/}
                    {/*}*/}
                    <button style={{
                        border: background === true ? "2px solid white" : "2px solid black"
                    }} onClick={() => setPage(page + 1, open())}>add</button>
                    <button style={{
                        border: background === true ? "2px solid white" : "2px solid black"
                    }} onClick={() => setPage(page - 1, open())}>delete</button>
                    <button style={{
                        border: background === true ? "2px solid white" : "2px solid black"
                    }} onClick={() => setPage( 1, open())}>reset</button>

                    <h1 style={{
                        color: background === true ? "white" : "black"
                    }}>Page: {page}
                        {page ? page === -0 : setPage(1)}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TopRated;