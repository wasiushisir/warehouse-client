import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../image/warhouse.jpg'
import Item from '../Item/Item';


const Home = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/items`)
        .then(response=>response.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <div className='pt-4 mt-4 mb-4'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">

                            <div className='text-banner'>
                            <h1>Everything You need to grow</h1>
                            <h1><span className='text-primary'>Your business</span></h1>
                            </div>
                            

                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at incidunt numquam aperiam totam quibusdam praesentium quas quae, in quia exercitationem. Expedita nam quod vel amet sequi, nostrum laborum saepe! </p>

                            <button  className='btn btn-primary d-block w-50 mx-auto mt-5'>Get started</button>
                        
                        </div>
                        <div class=" col-lg-6 col-sm-12 img-banner">
                           <img src={img} alt="" />
                        </div>
                        </div>


                    </div>



                </div>
                <div className='item-container mt-5'>
                    <h1 className='text-primary text-center'>Our Items</h1>
                    <div className='row'>
                        
                            

                        
                        {
                            items.map(item=><Item key={item._id}  item={item}></Item>)

                        }


                    </div>


                </div>



            </div>
            );
};

            export default Home;