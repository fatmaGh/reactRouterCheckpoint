import React, {useState, useEffect} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'react-bootstrap'


const Movie = ({defaultProps, movies}) => {

    const[movie,setMovie]=useState({})


    useEffect(() => { setMovie(movies.find((el) => el.title === defaultProps.match.params.id));}, []);


    return (
        <div className='movieContainer' style={{marginTop :'7%'}}>
            <a style={{textDecoration:'none', color:'inherit'}} href='http://localhost:3000/'><Button className="btn btn-warning home-btn">Home</Button></a>
            <h1 className='movieTitle'>{movie.title}</h1>
            <StarRatingComponent 
                            value={movie.rating}
                            className='movieRating'
                        />
            <p className='description'>{movie.description}</p>
            <iframe className='movieTrailer' width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Movie
