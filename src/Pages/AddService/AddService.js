import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-lake-21944.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
            })
    }
    return (
        <div>
            <h1 className="fw-bold text-center my-4">Add a service</h1>
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                <input value="Place Name" {...register("title")} />

                <input value="description" {...register("about")} />

                <input type="number" placeholder="price" {...register("address")} />
                <input placeholder="img url" {...register("imgURL")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;