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

                Authorization:1)We can run Javascript beyond the browser with the assist of NodeJS..
                2)It is mostly used on the server-side.
                3)Node js can not add HTML tags
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                   I use firebase because  for its simplcity easy to understand and few code and very much useful for authentication.So Many software industry using firebase for authentication.
                   Cloud Messaging for Cross-Platform Apps.Optimized App Performance.
                   other option of using authentication
                   1)Mongodb
                   2)occaeca
                   3)Auth0
                   4)Passport
                   5)Keycloack
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