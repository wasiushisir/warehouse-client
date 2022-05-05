import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
        <h2 className='text-center text-primary my-3'>Blogs</h2>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between Javascript and Nodejs?</Accordion.Header>
                <Accordion.Body>
                Javascript:1)Javascript run only the browser.2)It is basically used on the client-side.
                3)Javascript can add HTML and working with dom manupulation

                Node js:1)We can run Javascript beyond the browser with the assist of NodeJS..
                2)It is mostly used on the server-side.
                3)Node js can not add HTML tags
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Differences between sql and nosql databases.?</Accordion.Header>
                <Accordion.Body>
                    Sql) 1.Relational database management system.2)Folloes ACID property.
                    3)Vertically Scalable
                    NoSql)1.Non Relational database management system
                    2)Follows CAP.
                    3)Horizontally scalable

                   
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                <Accordion.Body>
                    1)Cloud Firestore
                    2)Cloud Storage
                    3)Hosting
                    4)Prediction
                    5)Dynamic Links
                    6)Realtime Database Hooks
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    </div>
    );
};

export default Blogs;