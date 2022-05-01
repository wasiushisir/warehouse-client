
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import MenageInventory from './components/MenageInventory/MenageInventory';
import Registration from './components/Registration/Registration';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        
        <Route path='/menageInventory' element={<MenageInventory></MenageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/registration'element={<Registration></Registration>}></Route>
      

      </Routes>
     
      
      
      
      
     
      
      
    </div>
  );
}

export default App;
