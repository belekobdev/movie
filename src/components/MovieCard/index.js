import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import img from "../../img/user-about.png"
import {LanguageContext} from "../../context";


const MovieCard = ({el, id}) => {
    const {background} = useContext(LanguageContext)

    return (
        <div key={id} className="popular--card rated--card"  >
            <Link to={`/movie/movie_details/${el.id}`}>
                {el.poster_path ?  <img width={170} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                   : <img src={img} width={300} alt=""/>}
            </Link>
            <h4 style={{
                color: background === true ? "white" : "black"
            }}>{el.title}</h4>
        </div>
    );
};

export default MovieCard;