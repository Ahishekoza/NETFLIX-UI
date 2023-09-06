import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx"
import {Route,Routes} from 'react-router-dom'
import './App.css'
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes >
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/user" element={<UserList/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
