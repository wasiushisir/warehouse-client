import React from 'react';

const Feedback = ({feedback}) => {
    const {Name,Review,img,Ratings}=feedback;
    return (
        



        <div class="card col-12 col-lg-3 ms-3 mt-4  rounded-top-left  rounded-bottom-right" style={{ width: '20rem' }}>
        <img style={{ width: '12rem' }} src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5>Name: {Name}</h5>
           
            <p ><b>Reviews:</b>{Review}</p>
            <h5>Ratings: {Ratings}</h5>
              

        </div>
    </div>
    
    );
};

export default Feedback;