import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx"
import {Route,Routes} from 'react-router-dom'
import './App.css'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes >
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/user" element={<UserList/>}></Route>
          <Route exact path="/user/:id" element={<User/>}></Route>
          <Route exact path="/newUser" element={<NewUser/>}></Route>
          <Route exact path="/products" element={<ProductList/>}></Route>
          <Route exact path="/product/:id" element={<Product/>}></Route>
          <Route exact path='/newProduct' element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
