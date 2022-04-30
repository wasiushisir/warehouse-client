
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';

import MenageInventory from './components/MenageInventory/MenageInventory';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        
        <Route path='/menageInventory' element={<MenageInventory></MenageInventory>}></Route>

      </Routes>
     
      
      
      
      
     
      
      
    </div>
  );
}

export default App;
