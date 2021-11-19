import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_ui = location.state?.from || '/home'
    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_ui);
            })
    }

    return (
        <div className="container login-page ">
            <div className="mx-auto text-center">
                <h2 className="heading my-5 fs-1">Please Login</h2>
                <button onClick={handleGoogle} className="btn btn-primary">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;