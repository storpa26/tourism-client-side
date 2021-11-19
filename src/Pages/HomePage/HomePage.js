import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Places from '../Places/Places';
import ReviewsHome from '../ReviewsHome/ReviewsHome';
import ServicesHome from '../ServicesHome/ServicesHome';
import "./HomePage.css"
import iconA from "./icon1.png"
import iconB from "./icon2.png"
import iconC from "./icon3.png"

const HomePage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
        document.querySelectorAll('img')
            .forEach((img) =>
                img.addEventListener('load', () => {
                    Aos.refresh();
                }))
    }, [])
    return (
        <Container>
            <div>
                <Container >
                    <div className="aos-test text-center" >
                        <h1 className="fs-1 fw-bolder">We Provide The Best</h1>
                        <p>Book high quality services from the best online tour managment
                            & wander around the world.</p>
                    </div>
                </Container>
                <Container>
                    <Row className="mx-auto g-4">
                        <Col data-aos="fade-right" className="mx-auto" lg={4} xs={12}>

                            <Card className="p-4 first-sec-card">
                                <Card.Img src={iconA} />

                                <Card.Title className="fw-bold">
                                    <p>Select Destination</p>
                                </Card.Title>
                                <Card.Text>
                                    <p>At first choose the place you wanted to go</p>
                                </Card.Text>

                            </Card>
                        </Col>
                        <Col data-aos="fade-right" className="mx-auto" lg={4} xs={12}>
                            <Card className="p-4 first-sec-card">
                                <Card.Img src={iconB} />
                                <Card.Title className="fw-bold">
                                    <p>Book A Trip</p>
                                </Card.Title>
                                <Card.Text>
                                    <p>book your tip form our exclusive offers</p>
                                </Card.Text>

                            </Card>
                        </Col>
                        <Col data-aos="fade-right" className="mx-auto" lg={4} xs={12}>
                            <Card className="p-4 first-sec-card">
                                <Card.Img src={iconC} />
                                <Card.Title className="fw-bold">
                                    <p>Take Your Flight</p>
                                </Card.Title>
                                <Card.Text>

                                    <p>Take your flight on selected date and joy</p>
                                </Card.Text>

                            </Card>
                        </Col>

                    </Row>
                </Container>
                <Places></Places>
                <ServicesHome></ServicesHome>
                <ReviewsHome></ReviewsHome>
            </div>


        </Container>
    );
};

export default HomePage;