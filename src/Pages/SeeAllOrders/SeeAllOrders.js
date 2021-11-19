import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const SeeAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://aqueous-lake-21944.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])


    return (
        <Container>
            <h1 className="fw-bold text-center my-5">Your Orders</h1>
            {
                isLoading ? <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> :
                    <Table responsive>
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Destination</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            allOrders?.map(order => {
                                return (
                                    <tbody key={order._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.title}</td>
                                            <td>{order.price}</td>
                                            <td>{order.phone}</td>
                                            <td>Pending</td>

                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </Table>}
        </Container>
    );
};

export default SeeAllOrders;