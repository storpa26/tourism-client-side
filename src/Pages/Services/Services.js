import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Services = () => {
    const { isLoading } = useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-lake-21944.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className="my-3">
            {!isLoading && <div>
                <h1 className="text-center fw-bolder">Featured Tour Places</h1>
                <Row className="mx-auto g-4 my-2">
                    {
                        services.map(service => {
                            return (
                                <Col key={service._id} className="mx-auto" lg={3} xs={12}>
                                    <Card className="p-0 services-card">
                                        <Card.Img src={service.imgURL} height="250" width="500" />
                                        <Card.Title className="my-0 px-3 fw-bolder py-4">
                                            <p className="cardd-title">{service.title}</p>

                                        </Card.Title>
                                        <p className="px-2 m-0">{service.about}</p>
                                        <br />
                                        <Card.Text className="px-3 d-flex justify-content-between">

                                            <div>

                                                <p><span className="text-secondary"><FontAwesomeIcon icon={faClock} /></span> 7 Days/6 Nights</p>
                                            </div>
                                            <div>
                                                <p className="text-danger"> <span className="text-danger"><FontAwesomeIcon icon={faDollarSign} /></span>{service.price}</p>
                                            </div>
                                        </Card.Text>
                                        <Link to={`/services/${service._id}`}>
                                            <button className="mx-3 btn btn-secondary">
                                                Book Now
                                            </button>
                                        </Link>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>}
            {
                isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>
            }
        </Container >
    );
};

export default Services;