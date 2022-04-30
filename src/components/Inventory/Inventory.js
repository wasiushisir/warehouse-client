import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../../image/inventoty.jpg'

const Inventory = () => {
    const countRef=useRef();
 const { id } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))

    }, [id])



    const handleDelivered = (id) => {
        let Quantity = item.Quantity;
        const name = item.name;
        const img = item.img;
        Quantity = Quantity -1;
        const updateQuantity = { Quantity, name, img };

        //send data to the server
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data)
                // alert('users added successfully')



                setItem(updateQuantity);







            })


    }



    const handleSubmit=(event)=>{
        event.preventDefault();
        const count=parseInt(countRef.current.value)
        const name = item.name;
        const img = item.img;
        // console.log(count);
        let Quantity = item.Quantity;
        Quantity=Quantity+count;
        const updateQuantity={Quantity,name,img};

         //send data to the server
         const url = `http://localhost:5000/items/${id}`;
         fetch(url, {
             method: 'PUT',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(updateQuantity),
         })
             .then(response => response.json())
             .then(data => {
                 console.log('success', data)
                 
 
 
 
                 setItem(updateQuantity);
                 event.target.reset();
 
 
 
 
 
 
 
             })


    }











    return (

        <div style={{background:'#ffc9b8'}} >
            <h2>this is inventory:{id}</h2>

            <div className='d-flex justify-content-between'>
                 <div className='row'> 

                <div className='col-sm-12 col-lg-6'>
                   
                    <img style={{width:'75%'}} src={photo} alt="" />

                </div>

           
        

            <div className='d-flex align-items-center justify-content-evenly col-sm-12 col-lg-6 '>
                <div class="card mx-5" style={{ width: '20rem',background:'#F5F5F5' }}>
                    <img style={{ width: '14rem' }} src={item.img} class="card-img-top mx-auto mt-3" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h5>Name: {item.name}</h5>
                        <h5>Quantity: {item.Quantity}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary' onClick={() => handleDelivered(id)}>Delivered</button>

                    </div>
                </div>
                <div className='mx-5' >
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Add Item Quantity</label>
                            <input ref={countRef} type="number" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>



                </div>
            </div>

            </div>




            </div>


        </div>
    );
};

export default Inventory;