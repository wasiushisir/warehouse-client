import React, { useEffect, useState } from 'react';

const MenageInventory = () => {
    const [items, setItems] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:5000/items`)
                .then(response => response.json())
                .then(data => setItems(data))
        }, [])
        const handleDelete=(id)=>
        {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(response=>response.json())
            .then(data=>{
                if(data.deletedCount)
                {
                    console.log('deleted successsfully');
                    const remaining=items.filter(item=>item._id!==id)
                    setItems(remaining)


                }
                

            })

        }
        
    return (
        <div>
            <h2>MInventory</h2>
            <div className="row">
                {
                    items.map(item=><div class="card col-12 col-lg-4 ms-5 mt-4  rounded-top-left  rounded-bottom-right img-container" style={{ width: '20rem', background: "#F8F8FF" }}>
                        <img style={{ width: '12rem' }} src={item.img} class="card-img-top" alt="..." />
                        <div className='card-body'>
                        <h5>Name: {item.name}</h5>
                        <h5>Quantity: {item.Quantity}</h5>
                           <h5>Price: {item.price}</h5>
                            <h5>Id: {item._id}</h5>
                            <button onClick={() => handleDelete(item._id)} className='btn btn-primary'>Delete</button>


                        </div>
                        
                       
                        

                        
                        
                        
                        </div>)
                }
            </div>

            
            
        </div>
    );
};

export default MenageInventory;