import React from 'react'
import './MovieCard.css'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {

    return (
        <div>
            <div className="card" >
                <img className='poster-card' src={movie.posterURL} />
                <div className='card-body'>
                    <h5 className='cardTitle'>{movie.title}</h5>
                    <p className='desc'>
                        {movie.description}
                    </p>
                    <StarRatingComponent 
                        value={movie.rating}
                        className='rating'
                    />
                    <Link className='trailer' to={`/movie/${movie.title}`}>TRAILER</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard