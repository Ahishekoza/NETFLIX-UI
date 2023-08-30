import './Home.css'
import Navbar from '../components/Navbar'
import Feature from '../components/feature/Feature'
import List from '../components/list/List'

const Home = ({type}) => {
  return (
    <div className='home'>
      <Navbar/>
      <Feature type={type}/>
      <List/>
      <List/>
      <List/>
      <List/>
      </div>
      
    )
  }

export default Home
