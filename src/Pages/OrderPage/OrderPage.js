import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import "./OrderPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const OrderPage = () => {
    const { user } = useAuth();

    const { id } = useParams();
    const [singleItem, setSingleItem] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-lake-21944.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))

    }, [id])
    delete singleItem._id;
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const userOrder = {
            ...data,
            ...singleItem,
            name: user.displayName,
            email: user.email
        }

        axios.post('https://aqueous-lake-21944.herokuapp.com/orders', userOrder)
            .then(res => {
                alert('Ordered Successfully!');
                console.log(res);
            })
    }
    return (
        <Container>
            <h2 className="text-center fw-bold mt-5">Please fill out the necessary information</h2>
            <Row className="mx-auto g-4 my-5">
                {
                    <Col className="mx-auto" lg={6} xs={12}>
                        <Card className="p-0 services-card">
                            <Card.Img src={singleItem.imgURL} height="250" width="500" />
                            <Card.Title className="my-0 fw-bold px-3 py-4">
                                <p className="cardd-title">{singleItem.title}</p>
                            </Card.Title>
                            <p className="px-2">{singleItem.about}</p>
                            <Card.Text className="px-3 d-flex justify-content-between">
                                <div>
                                    <p><span className="text-secondary"><FontAwesomeIcon icon={faClock} /></span> 7 Days/6 Nights</p>
                                </div>
                                <div>
                                    <p className="text-danger"> <span className="text-danger"><FontAwesomeIcon icon={faDollarSign} /></span>{singleItem.price}</p>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                }

                <Col className="mx-auto" lg={6} xs={12}>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <input disabled type="text" defaultValue={user.displayName} />

                        <input disabled type="text" defaultValue={user.email} />

                        <input type="text" placeholder="Address" {...register("address")} />

                        <input type="text" placeholder="Phone" {...register("phone")} />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;