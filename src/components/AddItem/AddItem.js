import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef();
    const desRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const supplyRef = useRef();
    const imgRef = useRef();
    if(user)
    {
        console.log(user);
    }
    
    const handleAddItem=(event)=>{
        event.preventDefault();
        const name=nameRef.current.value;
        const email=user?.email;
        const price=priceRef.current.value;
        const Quantity=quantityRef.current.value;
        const suppliername=supplyRef.current.value;
        const description=desRef.current.value;
        const img=imgRef.current.value;
        // console.log(name,price,Quantity,suppliername,description);
        const item={name,email,price,Quantity,suppliername,description,img}

        //post item
        const url=`https://limitless-caverns-11500.herokuapp.com/items`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(item)


        })
        .then(response=>response.json())
        .then(data=>{
            console.log('success',data);
            // alert('item added successfully')
            event.target.reset();

        })



        const url2=`https://limitless-caverns-11500.herokuapp.com/additems`;
        fetch(url2,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(item)


        })
        .then(response=>response.json())
        .then(data=>{
            console.log('success',data);
            alert('item added successfully')
            event.target.reset();

        })































    }

    return (
        <div>
            <h1 className='text-center text-primary mt-4'>Add Item</h1>
            <div className='w-50 mx-auto'>
            <form onSubmit={handleAddItem}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input ref={nameRef} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" class="form-text"></div>
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email Address</label>
                        <input  type="text" class="form-control" id="exampleInputEmail" value={user?.email} aria-describedby="emailHelp" required readOnly disabled />
                        <div id="emailHelp" class="form-text"></div>
                    </div>






                    <div class="form-floating">
                        <textarea ref={desRef} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}required></textarea>
                        <label for="floatingTextarea2">Short Description</label>
                    </div>





                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Price</label>
                        <input ref={priceRef} type="number" class="form-control" id="exampleInputPrice" aria-describedby="emailHelp"required />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Supplier Name</label>
                        <input ref={supplyRef} type="text" class="form-control" id="exampleInputSupply" aria-describedby="emailHelp"required />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Quantity</label>
                        <input ref={quantityRef} type="number" class="form-control" id="exampleInputQuantity" aria-describedby="emailHelp"required />
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Image</label>
                        <input ref={imgRef} type="text" class="form-control" id="exampleInputImage" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" class="form-text"></div>
                    </div>



                    <button type="submit" class="btn btn-primary mb-4">Submit</button>
                </form>



            </div>
            
        </div>
    );
};

export default AddItem;