import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";

const Home = () => {
    const [home, setHome] = useState([])
    const getHome = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-US&page=1`)
            .then((res) => {
                setHome(res.data.results)
            })
    }
    useEffect(() => {
        getHome(API_KEY)
    }, [])
    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    {
                        home.map((el) => {
                            return (
                                <div></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;