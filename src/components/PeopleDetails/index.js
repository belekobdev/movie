import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {useParams} from "react-router-dom";
import PersonMovie from "../PersonMovie";
import user from "../../img/akylbek.png"
import {LanguageContext} from "../../context";

const PeopleDetails = () => {
    const [people, setPeople] = useState({})
    const {language} = useContext(LanguageContext)
    const {background} = useContext(LanguageContext)


    const {personId} = useParams()
    const getPeople = (key) => {
        window.scroll(0,0)

        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res) => {
                setPeople(res.data)
            })
    }
    useEffect(() => {
        getPeople(API_KEY)
    }, [language])
    console.log(people)
    const {profile_path, name, biography, birthday, place_of_birth} = people
    return (
        <>
            <div id="PersonDetails" style={{
                background: background === true ? "black" : "white",
                color: background === true ? "white" : "black",
            }}>
            <div className="container">
                <div className="PersonDetails">
                    <div className="PersonDetails--img">
                        { profile_path ?  <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                            : <img className="user" src={user} style={{
                                padding: "70px 0 "
                            }} alt=""/>
                        }
                    </div>
                    <div className="PersonDetails--title">
                        <h1>{name}</h1>
                        <h3>Дата рождения: {birthday}</h3>
                        <h3>Место рождения: {place_of_birth}</h3>
                        <h2 >Биография</h2>
                        { biography ? <h4>{biography}</h4> : <h4>У нас нет биографии для <span>{name}</span></h4>}
                    </div>
                </div>
            </div>
        </div>
            <PersonMovie task={personId}/>
        </>
    );
};

export default PeopleDetails;