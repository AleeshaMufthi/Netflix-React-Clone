import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../Axios'
import { API_KEY, imageUrl } from '../../constants/Constants'

function Banner() {

  const [movie, setMovie] = useState()

  // const [datas, setDatas] = useState()

  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0])
          setMovie(response.data.results[4])
       })
  },[])
  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : "banner-image"})`}}
    className='banner'>
       <div className='content' >
           <h1 className='title'>{movie ? movie.name || movie.title : 'Loading...'}</h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{movie ? movie.overview : "Nothing"}</h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  )
}

export default Banner
