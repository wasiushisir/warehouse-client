import React, { useEffect, useState } from 'react';
import StockInventory from '../StockInventory/StockInventory';


const ManageInventory = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/items`)
        .then(response=>response.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <h2>Manage Inventory</h2>
            
                <div className="row">
                    {
                       items.map(item=><StockInventory key={item._id} item={item}></StockInventory>)
                    }
           
                </div>
            
            
        </div>
    );
};

export default ManageInventory;