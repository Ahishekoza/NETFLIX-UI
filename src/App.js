import './App.css';
import Home from './home/Home';
import Login from './login/login';
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './register/register';
function App() {
  const user = true;
  return (
    <div>
      {/* -- 'exact' is use to define the window location of the page ie window.location.pathname */}
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/register' />}></Route>
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />}></Route>
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}></Route>
        {
          user && (
            <>
              <Route path='/movies' element={<Home type="movies" />}></Route>
              <Route path='/series' element={<Home type="series" />}></Route></>
          )
        }
      </Routes>
    </div>
  );
}

export default App;
