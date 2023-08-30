import { useState } from 'react'
import './Navbar.css'


const Navbar = () => {

    const [isScrolled , setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return setIsScrolled
    }

  return (
    <div className={isScrolled?'navbar scrolled': 'navbar'}>
        <div className="container">
            {/* ---Left Side Of NavBar Img */}
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt='Netflix Logo'></img>

                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Popular</span>
                <span>My List</span>
            </div>
            {/* Right Side of Navbar Content */}
            <div className="right">
                <span className="icon">SEARCHICON</span>
                <span className="icon">KID</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt='Netflix Logo'></img>
                <div className="profile">
                <span className="icon">MENU</span>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar