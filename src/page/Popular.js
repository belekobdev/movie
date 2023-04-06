import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";
import { LanguageContext} from "../context";

const Popular = () => {
    // const [count, setCount] = useState(1)
    const [popular, setPopular] = useState([])
    // const array = [1,2,3,4,5,6,7,8,9,10]
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const {background} = useContext(LanguageContext)
    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
                setPopular(res.data.results)
            })
    }

    const open = () => {
        window.scroll(0,0)
    }
    useEffect(() => {
        getPopular(API_KEY)
    }, [popular, page, language])

    return (
        <div id="popular" style={{
            background: background === true ? "black" : "white",
        }}  >
            <div className="container">
                {/*<h1 className="h1">Popular</h1>*/}
                <div className="popular">
                    {
                        popular.map((el) => {
                            return (
                                <MovieCard el={el} key={el.id}/>
                            )
                        })
                    }
                </div>
                <div className="popular--pages">
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
                   <h2  style={{
                       color: background === true ? "white" : "black"
                   }}>Page: {page}
                       {page ? page === -0 : setPage(1)}</h2>
                </div>
            </div>
        </div>
    );
};

export default Popular;