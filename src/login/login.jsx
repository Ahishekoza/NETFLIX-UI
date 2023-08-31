import './login.css'
import { useState} from 'react'



const Login = () => {

    const [email,setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(email,password)
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />

                </div>
            </div>
            <div className="container">
                <form >
                    <h1>Sign In</h1>
                    <input type="text" placeholder="EmailId Or Phone Number" onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <button className="loginButton" onClick={handleLogin} >
                        Sign In
                    </button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login