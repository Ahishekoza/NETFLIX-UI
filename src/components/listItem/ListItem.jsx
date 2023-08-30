import { useState } from 'react'
import './ListItem.css'

const ListItem = ({index}) => {

  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const [isHover, setIsHover] = useState(false)
  return (
    <div className='listItem'
     style={{left : isHover && index * 225 -50 + index*2.5}}
     onMouseEnter={()=>setIsHover(true)} 
     onMouseLeave={()=>setIsHover(false)}
     >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {
        isHover ? <>
        <video src={trailer} autoPlay={true} loop></video>
        <div className="itemInfo">
        <div className="icons">

        </div>
        <div className="itemInfoTop">
             <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, labore facilis perferendis est placeat vitae praesentium. Beatae corporis commodi praesentium ad rem distinctio, delectus minima nemo perferendis optio animi quis!
        </div>
        <div className="action">
          Action
        </div>
      </div>
        </> 
        : 
        <></>
      }
    </div>
  )
}

export default ListItem