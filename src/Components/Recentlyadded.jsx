import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Tvshows.css'

let API_key="db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/tv/airing_today?api_key="+API_key;

const Recentlyadded = () => {
    const [movieData,setData] = useState([]);
    const [url_set,setUrl] = useState(url);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])
    
  return (<>
    
    <div className="container">
    <h1>Recently Added</h1>
    {movieData.map((res,pos)=>(
        <div className="movie">   
     
        <a href={`https://www.2embed.org/embed/?id=${res.id}`}><img key={pos} src={`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="logo" className="poster"></img></a>
        <div className="movie-details">
            <div className="box">
                <h4 className="title">{res.title||res.name}</h4>
                <p className="rating">{res.vote_average}</p>
            </div>
            <div className="overview">
                <h1 >overview</h1>
                {res.overview}
            </div>
           
            </div>    
            </div>
        ))} 
    


    </div>
    
</>
)}

export default Recentlyadded
