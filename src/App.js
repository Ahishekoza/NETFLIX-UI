import './App.css';
import Home from './home/Home';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Home type="movies" />}></Route>
        <Route path='/series' element={<Home type="series" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
