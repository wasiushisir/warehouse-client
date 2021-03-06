
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About/About';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import MenageInventory from './components/MenageInventory/MenageInventory';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        
        <Route path='/menageInventory' element={<RequireAuth><MenageInventory></MenageInventory></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/registration'element={<Registration></Registration>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myItem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      

      </Routes>
      <Footer></Footer>
     
      
      
      
      
     
      
      
    </div>
  );
}

export default App;
