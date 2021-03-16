import {useEffect, useState} from 'react';

const SingleMovie = (props) => {
    console.log("id: " + props.id + "title: " + props.title + "overview: " + props.overview + "image: " + props.poster_path);

    return(
        <>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <label htmlFor='reviewTitle'>Review Title:</label>
                <br />
                <input type='text' id='reviewTitle' /> 
                <br />
                <label htmlFor='reviewContent'>Review:</label>
                <br />
                <input type='text' id='reviewContent' />
            </div>
        </>
    )
};

export default SingleMovie;

