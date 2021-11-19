import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <div className="container">
            <Row className="mx-auto my-5">
                <Col className="my-5" lg="5" xs="12">
                    <div className='border border-1 rounded p-3 my-5'>
                        <h1 className="text-seconday text-center fw-bold">About Us</h1>
                        <p className='text-success p-4'>We have been serving our customers for 5 years now. Everyone is satisfied with our service. Travelling is the best medicine for a depressed soul. We are here to help you and make your journey easier. Your satisfaction is our only concern.</p>
                    </div>
                </Col>
                <Col md="7" xs="12">
                    <img className='img-fluid' src="https://image.freepik.com/free-vector/organic-flat-new-normal-hotels-illustration_23-2148935231.jpg" alt="" width="600" height="500" />

                </Col>
            </Row>
        </div>
    );
};

export default About;