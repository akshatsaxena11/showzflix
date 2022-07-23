import React from 'react'
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"
import { useState } from 'react';
import { useEffect } from 'react';
import Tvshows from './Tvshows'

let API_key="db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=";


const Header = () => {
   /* const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])


    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }*/   
    return (<>
        <nav className="header">

            <p><a href='/'>Showzflix</a></p>

            <div className='link'>
                <Link to="/Tvshows" >Tvshows</Link>
                <Link to="/Movies" >Movies</Link>
                <Link to="/Recent" >Recently Added</Link>
                <Link to="/recommend" >Recommendations</Link>
            </div>
            <a href='/Search'><ImSearch /></a>

                
            

        </nav>
         
    </>    
    )
}

export default Header