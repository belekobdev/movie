import React, {useContext, useState} from 'react';
import img from "../../img/move-logo.png"
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";

const Header = () => {
    const [search, setSearch] = useState("")
    const input = (e) => {
        if (e.key === "Enter") {
            nav(`/search/search_movie/${search}`)
        }
    }
    const {setLanguage} = useContext(LanguageContext)
    const {setBackground} = useContext(LanguageContext)
    const {background} = useContext(LanguageContext)
    const nav = useNavigate()
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <img src={img} alt="img"/>
                        <div className="header--btn">
                            <input type="text" placeholder="Поиск по фильмам " onKeyDown={(e) => {
                                input(e)
                            }}
                                   onChange={(e) => {
                                       setSearch(e.target.value)
                                   }}/>
                            <button onClick={() => nav(`/search/search_movie/${search}`)}>Search</button>
                            <select onChange={(e) => {
                                setLanguage(e.target.value)
                            }}>
                                <option value="en-US">usa</option>
                                <option value="ru-RU">русский</option>
                                <option value="fr-FR">француский</option>

                            </select>
                        </div>
                        <div className="header--nav">
                            <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                            <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                            <NavLink to={"/top_rated"} className="header--nav__link">Top Rated</NavLink>
                        </div>
                        <div className="header--navigation">
                            <div className="header--navigation__black"
                                 style={{
                                     transform: background === true ? "translateX(40px)" : ""
                                 }}
                                 onClick={() => {
                                     setBackground(true)
                                 }}></div>
                            {/*<div className="header--navigation__black" onClick={() => {*/}
                            {/*    setBackground(true)*/}
                            {/*}}>*/}

                            <div className="header--navigation__white"
                                 // style={{
                                 //     transform: background === true ? "translateX(40px)" : ""
                                 // }}
                                 onClick={() => {
                                setBackground(false)
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;