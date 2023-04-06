import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";

const Trailer = ({movieId}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=ru-RU`)
            .then((res) => {
                setVideo(res.data.results)
            })
    }
        useEffect(() => {
            getVideo(API_KEY)
        }, [])
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                        video.slice(0,1).map((el) => (
                            <div className="video--card">
                                <iframe width="900" height="534" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="Учим Python за 1 час! #ОтПрофессионала | HD Remake" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;