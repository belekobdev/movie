import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import Actors from "../Actors";
import Trailer from "../Trailer";
import img from "../../img/akylbek.png"
import bg from "../../img/bg-img.jpg"
import {LanguageContext} from "../../context";


const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const {language} = useContext(LanguageContext)


    const getDetails = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            .then((res) => {
                // console.log(res.data)
                console.log(res.data)
                setDetails(res.data)
            })
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    const {poster_path, title, release_date, overview, runtime, vote_average, backdrop_path, tagline, genres} = details;
    return (
        <>
            <div id="details" style={{
                backgroundImage: backdrop_path ?  `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`})` : `url(${bg})`,
            }}>
                <div className="container">
                    <div className="details">
                        <div className="details--img">
                            {poster_path ?<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}   alt="img"/>
                                : <img style={{
                                    border: "4px solid white",
                                    padding: "60px 0",
                                }} src={img} alt=""/>
                            }
                        </div>
                        <div className="details--info" >
                            <div className="details--info__name">
                                <h1>{title}</h1>
                            </div>
                            <div className="details--info__data">
                                <h5>{release_date}</h5>
                                <div className="div"></div>
                                <h3>{Math.floor(runtime / 60)} <small>ч</small> {runtime % 60} <small>мин</small> </h3>
                                <div className="div"></div>
                                {
                                    genres?.map((el) => {
                                        return (
                                            <h4>{el.name},   </h4>
                                        )
                                    })
                                }
                            </div>
                            <div className="details--info__rating">
                                <h4>{Math.round(vote_average * 10)}<sup>%</sup></h4>
                                <h3>Рейтинг</h3>
                            </div>
                            <h6>{tagline}</h6>
                            <h1>Обзор</h1>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Actors  movieId={id}/>
            <Trailer movieId={id}/>
        </>

    );
};

export default MovieDetails;