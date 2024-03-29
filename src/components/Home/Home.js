import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../image/warhouse.jpg'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const [feedbacks, setFeedback] = useState([]);
    useEffect(() => {
        fetch('https://ware-server.onrender.com/feedback')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, [])
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(`https://ware-server.onrender.com/additems`)
        .then(response=>response.json())
        .then(data=>setItems(data))
    },[])

    if(loading)
    {
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }


    return (
       <div className='container-fluid'>
            <div className='container-fluid'>
            <div className='pt-4 mt-4 mb-4 '>
                <div className='container-fluid'>
                    <div class="row ">
                        <div class="col-lg-6 col-12 ">

                            <div className='text-banner '>
                            <h1>Everything You need to grow</h1>
                            <h1><span className='text-primary'>Your business</span></h1>
                            </div>
                            

                            <p className='mt-5'>Stock or stock inventory is the collection of all the materials and goods stored, whether for use to complete the production process or for sale to the customer </p>

                            <button  className='btn btn-primary d-block w-50 mx-auto mt-5'>Get started</button>
                        
                        </div>
                        <div class=" col-lg-6 col-12 img-banner">
                           <img src={img} alt="" />
                        </div>
                        </div>


                    </div>



                </div>
                <div className='item-container mt-5'>
                    <h1 className='text-primary text-center'>Our Items</h1>
                    <div className='row container-fluid'>
                        
                            

                        
                        {
                            items.slice(0,6).map(item=><Item key={item._id}  item={item}></Item>)

                        }


                    </div>


                </div>

                <Link to='/menageInventory'><button className=' mx-auto d-block btn btn-lg btn-primary mt-5'>Manage Inventory</button></Link>
                <div id='about' className='mt-5'>
                    <About></About>

                </div>
                <div id='feedback'>
                <h1 className='text-primary text-center mb-4 mt-4'>Feedback</h1>
                

                <div className='row container-fluid'>



{
     feedbacks.map(feedback => <Feedback key={feedback.id} feedback={feedback}></Feedback>)

}






</div>
               


                </div>



            </div>

       </div>
            );
};

            export default Home;