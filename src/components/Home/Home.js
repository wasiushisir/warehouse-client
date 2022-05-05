import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../image/warhouse.jpg'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';


const Home = () => {
    const [feedbacks, setFeedback] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, [])
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/additems`)
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
                            items.slice(0,6).map(item=><Item key={item._id}  item={item}></Item>)

                        }


                    </div>


                </div>

                <Link to='/menageInventory'><button className=' mx-auto d-block btn btn-lg btn-primary mt-5'>Manage Inventory</button></Link>
                <div className='mt-5'>
                    <About></About>

                </div>
                <div>
                <h1 className='text-primary text-center mb-4 mt-4'>Feedback</h1>
                

                <div className='row'>



{
     feedbacks.map(feedback => <Feedback key={feedback.id} feedback={feedback}></Feedback>)

}






</div>
               


                </div>



            </div>
            );
};

            export default Home;