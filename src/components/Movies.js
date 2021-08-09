import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
    
        {movies.map(movie => {
          return (<div key={movie.title} className="movie-card">
            <h1>Name: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <ul>Genres: 
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div>)
        })}
    </div>
  );
};

export default Movies;
