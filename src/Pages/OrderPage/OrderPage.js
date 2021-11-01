import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import "./OrderPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const OrderPage = () => {
    const { user } = useFirebase();

    const { id } = useParams();
    const [order, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://aqueous-lake-21944.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [id])
    console.log(order);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-lake-21944.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
            })
    }
    return (
        <Container>
            <Row className="mx-auto g-4 my-5">
                {
                    <Col key={order._id} className="mx-auto" lg={6} xs={12}>
                        <Card className="p-0 services-card">
                            <Card.Img src={order.imgURL} height="250" width="500" />
                            <Card.Title className="my-0 fw-bold px-3 py-4">
                                <p className="cardd-title">{order.title}</p>
                            </Card.Title>
                            <Card.Text className="px-3 d-flex justify-content-between">
                                <div>
                                    <p><span className="text-secondary"><FontAwesomeIcon icon={faClock} /></span> 7 Days/6 Nights</p>
                                </div>
                                <div>
                                    <p className="text-danger"> <span className="text-danger"><FontAwesomeIcon icon={faDollarSign} /></span>{order.price}</p>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                }

                <Col className="mx-auto" lg={6} xs={12}>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <input value={user.displayName} {...register("firstName")} />

                        <input value={user.email}  {...register("email")} />

                        <input placeholder="Address" {...register("address")} />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;