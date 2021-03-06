import React, { useState } from "react";
import { Movie } from "../../types";

type Props = {
    movie: Movie;
}

const MovieItem: React.FC<Props> = ({movie}) => {
    const [addedToWatchLater, setaddedToWatchLater] = useState<boolean>();

    const watchLaterClick = () => { 
        setaddedToWatchLater(true); 
        console.log('Movie clicked', addedToWatchLater);
    }
    return (
        <div className="movie-item" style={{marginBottom:'1rem'}}>
            <img src={movie.image} alt={movie.title} style={{width: '200px', height: '200px' }}/>
             <div>{ movie.title}</div>
             <div>{ movie.descripti on}</div>
             <div>{ movie.duration / 60} hours</div>
             <button onClick={watchLaterClick}>{addedToWatchLater ? 'Added to list' : 'Watch later'}</button>
        </div>

    );
};

export default MovieItem;