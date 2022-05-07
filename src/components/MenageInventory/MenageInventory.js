import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenageInventory = () => {
    // const nameRef = useRef();
    // const desRef = useRef();
    // const priceRef = useRef();
    // const quantityRef = useRef();
    // const supplyRef = useRef();
    // const imgRef = useRef();
    const navigate=useNavigate();

    const gotoAddItem=()=>{
        navigate('/addItem');
    }





    const [itms, setItms] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-caverns-11500.herokuapp.com/items`)
            .then(response => response.json())
            .then(data => setItms(data))
    }, [])



    const [addItems,setAddItems]=useState([])
    useEffect(()=>{
        fetch('https://limitless-caverns-11500.herokuapp.com/additems')
        .then(response=>response.json())
        .then(data=>setAddItems(data))
    },[])










    const handleDelete = (id) => {

        const proceeed=window.confirm('are you sure you wanna delete')
        if(proceeed)
        {
            const url = `https://limitless-caverns-11500.herokuapp.com/additems/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log('deleted successsfully');
                    const remaining = addItems.filter(item => item._id !== id)
                    setAddItems(remaining)


                }


            })

        }
        




    }



    // const handleAddItem=(event)=>{
    //     event.preventDefault();
    //     const name=nameRef.current.value;
    //     const price=priceRef.current.value;
    //     const Quantity=quantityRef.current.value;
    //     const suppliername=supplyRef.current.value;
    //     const description=desRef.current.value;
    //     const img=imgRef.current.value;
    //     // console.log(name,price,Quantity,suppliername,description);
    //     const item={name,price,Quantity,suppliername,description,img}

    //     //post item
    //     const url=`http://localhost:5000/items`;
    //     fetch(url,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json',

    //         },
    //         body:JSON.stringify(item)


    //     })
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log('success',data);
    //         alert('item added successfully')
    //         event.target.reset();

    //     })


    // }

    return (



        <div className='row mt-5'>
            <h1 className='text-center text-primary fs-1 fw-bold mb-5'>Manage Inventory</h1>

            <div className='col-lg-7 col-sm-12'>

                <div className="row">
                    {
                        addItems.map(item => <div class="card col-12 col-lg-4 ms-5 mt-4  rounded-top-left  rounded-bottom-right img-container" style={{ width: '20rem', background: "#F8F8FF" }}>
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

            <div className='col-lg-3 col-sm-12 mx-auto'>
                {/* <h2 className='text-center text-primary'>Add Item</h2> */}
                <button onClick={gotoAddItem} className='btn btn-primary btn-lg'>Add new Item</button>
                {/* <form onSubmit={handleAddItem}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input ref={nameRef} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>


                    <div class="form-floating">
                        <textarea ref={desRef} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        <label for="floatingTextarea2">Short Description</label>
                    </div>





                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Price</label>
                        <input ref={priceRef} type="number" class="form-control" id="exampleInputPrice" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Supplier Name</label>
                        <input ref={supplyRef} type="text" class="form-control" id="exampleInputSupply" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Quantity</label>
                        <input ref={quantityRef} type="number" class="form-control" id="exampleInputQuantity" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Image</label>
                        <input ref={imgRef} type="text" class="form-control" id="exampleInputImage" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>



                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}



            </div>


        </div>
    );
};

export default MenageInventory;