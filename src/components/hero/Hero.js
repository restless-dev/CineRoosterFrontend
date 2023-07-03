import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
    const navigate = useNavigate();
    
    return (
        <div className = 'movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        return(
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                        <div className='movie-detail'>
                                            <div className='movie-cover'>
                                                <img src= {movie.cover} alt='' />
                                            </div>
                                            <div className='movie-title'>
                                                <h3>{movie.title}</h3>
                                            </div>
                                            <div className='movie-buttons-container'>
                                                <Link to={`/Player/${movie.trailerLink}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className='play-button-icon'
                                                            icon = {faCirclePlay}
                                                    />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero