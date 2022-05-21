import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Component/AddItems/AddItems';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import InventoryProductDetail from './Component/InventoryProductDetail/InventoryProductDetail';
import Login from './Component/Login/Login';
import ManageItems from './Component/ManageItems/ManageItems';
import MyItem from './Component/MyItem/MyItem';
import NotFound from './Component/NotFound/NotFound';
import SignUp from './Component/SignUp/SignUp';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/ManageItems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path='/AddItems' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/product/:_id' element={<RequireAuth><InventoryProductDetail></InventoryProductDetail></RequireAuth>}></Route>
        <Route path='/MyItem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
