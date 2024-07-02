import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../Axios'
import { imageUrl, API_KEY } from '../../constants/Constants'
import Youtube from 'react-youtube'

const RowPost = ({title, isSmall, url}) => {

  const [movies, setMovies] = useState([])

  const [urlid, setUrlId] = useState('')

  useEffect(()=>{
     axios.get(url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
     })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id) =>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Trailer not available')
        }
      })
  }

  return (
    <div className='row'>

      <h2 className='poster-name'>{title}</h2>

      <div className='posters'>
        {movies.map((obj)=>
            <img onClick={()=>handleMovieTrailer(obj.id)} className={isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )} 
      </div>

      { urlid && <Youtube videoId={urlid.key} opts={opts} />}

    </div>
  )
}

export default RowPost
