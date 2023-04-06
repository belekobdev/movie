import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import img from "../../img/akylbek.png"


const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast)
            })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll:4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
            <div id="actors">
                <div className="container">
                    <h1>В Главных Ролях</h1>
                    <div className="actors">
                        <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className="actors--card">
                                    <Link to={`/person/person_details/${el.id}`}>
                                        {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}alt=""/>
                                            : <img src={img} width={140} height={160} style={{
                                            border: "2px solid black",
                                                borderRadius: "7px",
                                                padding: "7px 0"
                                            }
                                            } alt=""/>
                                        }
                                        <h4>{el.name}</h4>
                                    </Link>
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>
            </div>
    );
};

export default Actors;