import './Home.css'
import Navbar from '../components/Navbar'
import Feature from '../components/feature/Feature'
import List from '../components/list/List'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Home = ({type}) => {

  const [lists, setLists] = useState([])
  const [genre,setGenre] = useState("")

  

  useEffect(() => {
    const getRandomLists = async() =>{
      await axios.get(`lists${type? '?type='+type: ''}${genre? '&genre='+genre:''}`,{
       headers:{
         token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWFmOTEwNWI5MDdlYjBkMDdkN2I4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzYyODQ1MSwiZXhwIjoxNjk0MDYwNDUxfQ.EAi0ko9EiqpZm-RWgpwlykn6D3mjmE4soDR83Xoof0s"
       }
      }).then((list)=>{
       setLists(list.data);
       console.log(list.data)
      })
   }
    return () => {
      getRandomLists()
    }
  }, [type,genre])
  



  return (
    <div className='home'>
      <Navbar/>
      <Feature type={type}/>
      {lists.map((list) => (
        <List list={list} />
      ))}
     
      </div>
      
    )
  }

export default Home
