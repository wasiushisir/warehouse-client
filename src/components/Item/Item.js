import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const navigate=useNavigate();
   
    const {name,img,price,Quantity,suppliername,description,_id}=item
    const handleStockUpdate=(id)=>
    {
        navigate(`/inventory/${id}`)


    } 

    

    
    return (
        <div class="card col-12 col-lg-4 ms-5 mt-4  rounded-top-left  rounded-bottom-right img-container" style={{ width: '20rem',background:"#F8F8FF" }}>
        <img  style={{ width: '12rem' }} src={img} class="card-img-top" alt="..." />
        <div class="card-body ms-5">
        <p className='mb-0'><b>Name:</b>{name}</p>
                                <p className='mb-0'><b>Short Description</b>:{description}</p>
                                <p className='mb-0'><b>Price</b>:{price}</p>
                                <p className='mb-0'><b>Supplier Name</b>:{suppliername}</p>
                                <p className='mb-0'><b>Quantity</b>:{Quantity}</p>
          <button className='btn btn-primary mt-3' onClick={()=>handleStockUpdate(_id)}> Stock Update</button> 

        </div>
    </div>
       
            
  
  
        
        
      
    );
};

export default Item;