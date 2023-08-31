import './Home.css'
import Navbar from '../components/Navbar'
import Feature from '../components/feature/Feature'
import List from '../components/list/List'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Home = ({type}) => {

  const [lists, setLists] = useState([])
  const [genre,setGenre] = useState("")

  const getRandomLists = async() =>{
     await axios.get(`lists${type? '?type='+type: ''}${genre? '&genre='+genre:''}`,{
      headers:{
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWFmOTEwNWI5MDdlYjBkMDdkN2I4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzQ1OTY0OSwiZXhwIjoxNjkzODkxNjQ5fQ.3rL_sEDOgH8ZPrcIbCWtRBNLSrprzLQQjuJ-g37V3VI"
      }
     }).then((list)=>{
      setLists(list.data);
     })
  }

  useEffect(() => {
  
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
