import './Watch.css'
import {NavLink, useLocation} from 'react-router-dom'
 
const Watch = () => {
  const location = useLocation()
  const trailer = location.state.Movie.video
  return (
    <div className="watch">
        <NavLink className="navtitle" to='/'>
            <div className="back">
                Home
            </div>
        </NavLink>
        <video autoPlay progress="true" controls src={trailer} className="video"></video>
    </div>
  )
}

export default Watch