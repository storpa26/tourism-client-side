import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://aqueous-lake-21944.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const handleDeleteOrder = id => {

        window.confirm('Are you sure you want to cancel this order?');
        fetch(`https://aqueous-lake-21944.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!');
                    const remaining = allOrders.filter(order => order._id !== id)
                    setAllOrders(remaining)
                }
            })
    }
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
                                <th>Action</th>
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
                                            <td>{`${order.status ? order.status : 'Pending'}`}</td>
                                            <td> <Button onClick={() => handleDeleteOrder(order._id)} variant="danger">Delete</Button> </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </Table>}
        </Container>
    );
};

export default ManageAllOrders;