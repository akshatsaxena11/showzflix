import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import './Search.css'

let API_key="db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";

const SearchBox = (props)=>(
<form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" value={props.value} onChange={(event)=>props.setSearchValue(event.target.value)} >
                        </input>
                        <button><ImSearch /></button>
                    </div>
                </form>
)
const Search  = () => {
 const [movies,setMovies] = useState([]);
 const [searchValue,setSearchValue] = useState('');

 const getMovieRequest = async (searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson= await response.json();

    if(responseJson.Search){
    setMovies(responseJson.Search);
    }
     };

 useEffect(()=>{
    getMovieRequest(searchValue);
 },[searchValue]);
    
  return (<>
  <div className='top'>
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>  
    <div className="container">
    <h1>Search Results</h1>
    {movies.map((res,pos)=>(
        <div className="movie">   
     
        <a href={`https://www.2embed.org/embed/?id=${res.imdbID}`}><img key={pos} src={`${res.Poster}`} alt="logo" className="poster"></img></a>
        <div className="movie-details">
            <div className="box">
                <h4 className="title">{res.Title||res.name}</h4>
           </div>
            </div>    
            </div>
            
        ))} 
   </div>
   </div>
    </>
  )
}

export default Search 
