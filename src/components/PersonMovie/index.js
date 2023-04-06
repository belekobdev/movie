import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import img from "../../img/akylbek.png"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const PersonMovie = ({task}) => {
    const [person, setPerson] = useState([])
    const {language} = useContext(LanguageContext)
    const {background} = useContext(LanguageContext)


    const getPerson = (key) => {
        axios(`https://api.themoviedb.org/3/person/${task}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setPerson(res.data.cast)
            })
    }
    useEffect(() => {
        getPerson(API_KEY)
    }, [language])
    console.log(person)
    // const {poster_path, title} = person;
    return (
        <div id="PersonMovie" style={{
            background: background === true ? "black" : "white",
            color: background === true ? "white" : "black",
        }} >
            <div className="container">
                <h2>Известность за</h2>
                <div className="PersonMovie">
                    {
                        person.map((el) => {
                            return (
                                    <div className="PersonMovie--card" >
                                        <Link to={`/movie/movie_details/${el.id}`}  >
                                        {el.poster_path ? <img  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                            : <img src={img} style={{
                                            width: "150px",
                                                border: "2px solid black",
                                                padding: "35px 0"
                                            }} alt=""/>
                                        }
                                        <h4  style={{
                                            color: background === true ? "white" : "black",
                                        }} >{el.title}</h4>
                                        </Link>
                                    </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default PersonMovie;