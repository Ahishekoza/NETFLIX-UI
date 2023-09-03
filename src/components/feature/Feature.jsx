import { useEffect, useState } from 'react'
import './Feature.css'
import axios from 'axios'
const Feature = ({type}) => {
  
  const [content,setContent] = useState([])
  
 

  useEffect(()=>{
    const getRandomContents = async()=>{
      await axios.get(`movies/random${type ? '?type='+type : ''}`).then((response)=>{
       setContent(response.data[0]);
      })
   }
    return () => {
      getRandomContents()
    }

  },[type])

  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'movie' ? 'MOVIES' : "TV SERIES"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

      <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='Netflix Logo'></img>
      <div className="info">
        <img src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1' alt='movie_name'/>
        <span className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis animi, similique iure nisi quia eveniet repudiandae id, hic atque ullam deserunt ipsam dolor tempora magnam rerum. Esse, corporis labore!
        </span>
        <div className='buttons'>
            <button className='play'>Play</button>
            <button className='more'>More</button>
        </div>
      </div>
    </div>
  )
}

export default Feature