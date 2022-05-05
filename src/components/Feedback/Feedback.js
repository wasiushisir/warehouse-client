import React from 'react';

const Feedback = ({feedback}) => {
    const {Name,Review,img,Ratings}=feedback;
    return (
        <div class="card col-12 col-lg-4 mx-4 mt-4  rounded-top-left  rounded-bottom-right" style={{ width: '24rem' }}>
        <img style={{ width: '23rem' }} src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5>Name: {Name}</h5>
           
            <p ><b>Reviews:</b>{Review}</p>
            <h5>Ratings: {Ratings}</h5>
              

        </div>
    </div>
    );
};

export default Feedback;