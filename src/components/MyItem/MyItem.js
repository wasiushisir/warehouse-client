import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email=user?.email;
        fetch(`http://localhost:5000/items?email=${email}`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [user])
    // useEffect(()=>{

        // const getMyItem=async()=>{
        //     const email=user?.email;
        //     const url=`http://localhost:5000/myitem?email=${email}`

        //     const {data}=axios.get(url);
        //     setMyItem(data)


        // }
        // getMyItem()


        const handleDelete = (id) => {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount) {
                        console.log('deleted successsfully');
                        const remaining = items.filter(item => item._id !== id)
                        setItems(remaining)
    
    
                    }
    
    
                })
    
    
    
    
        }












        

     
    if(user)
    {
        console.log(user);
    }
    return (
        <div>
            <h2>My Item:{items.length}</h2>

            <div>

            <div className="row">
                    {
                        items.map(item => <div class="card col-12 col-lg-4 ms-5 mt-4  rounded-top-left  rounded-bottom-right img-container" style={{ width: '20rem', background: "#F8F8FF" }}>
                            <img style={{ width: '12rem' }} src={item.img} class="card-img-top" alt="..." />
                            <div className='card-body ms-5'>
                               
                                <p className='mb-0'><b>Name:</b>{item.name}</p>
                                <p className='mb-0'><b>Short Description</b>:{item.description}</p>
                                <p className='mb-0'><b>Price</b>:{item.price}</p>
                                <p className='mb-0'><b>Supplier Name</b>:{item.suppliername}</p>
                                <p className='mb-0'><b>Quantity</b>:{item.Quantity}</p>

                                
                                  <button onClick={() => handleDelete(item._id)} className='btn btn-primary mt-4'>Delete</button> 


                            </div>







                        </div>)
                    }
                </div>





            </div>
            
        </div>
    );
};

export default MyItem;