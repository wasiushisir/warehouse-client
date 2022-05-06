import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../../image/inventoty.jpg'

const Inventory = () => {
    const countRef=useRef();
 const { id } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/additems/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))

    }, [id])



    const handleDelivered = (id) => {
        let Quantity = item.Quantity;
        const name = item.name;
        const description=item.description;
        const suppliername=item.suppliername;
        const price=item.price;

        const img = item.img;
        Quantity = Quantity -1;
        const updateQuantity = { Quantity, name, img,description,suppliername,price };

        //send data to the server
        const url = `http://localhost:5000/additems/${id}`;
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
        const description=item.description;
        const suppliername=item.suppliername;
        const price=item.price;
        // console.log(count);
        let Quantity = item.Quantity;
        Quantity=parseInt(Quantity+count);
        const updateQuantity={Quantity,name,img,description,suppliername,price};

         //send data to the server
         const url = `http://localhost:5000/additems/${id}`;
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
            <h2 className='text-center'>this is inventory:{id}</h2>

            <div className='d-flex justify-content-between'>
                 <div className='row'> 

                <div className='col-sm-12 col-lg-6 mt-5'>
                    <div className='ps-4'>
                   
                    <img style={{width:'75%'}} src={photo} alt="" />
                    </div>

                </div>

           
        

            <div className='d-flex align-items-center justify-content-evenly col-sm-12 col-lg-6 mb-5 mt-5 '>
                <div class="card mx-5" style={{ width: '20rem',background:'#F5F5F5' }}>
                    <img style={{ width: '14rem' }} src={item.img} class="card-img-top mx-auto mt-3" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h5>Name: {item.name}</h5>
                        <h5>Quantity: {item.Quantity}</h5>
                        <h5>Price: {item.price}</h5>
                        <h5>SupplierName: {item.suppliername}</h5>
                        <p class="card-text">Description:{item.description}</p>
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