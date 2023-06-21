import { Component } from 'react';
import { login } from '../../utilities/users-service';
import './LoginForm.css';
import { useState } from 'react';

export default function LoginForm({ setUser }) {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
        setError('')
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            // const { name, email, password } = this.state;
            // const formData = { name, email, password };
            // // The promise returned by the signUp service
            // // method will resolve to the user object included
            // // in the payload of the JSON Web Token (JWT)
            // const user = await signUp(formData);
            // this.props.setUser(user);

            const user = await login(credentials)
            setUser(user);

            // console.log('credentials in login', credentials)
        } catch {
            // An error occurred
            // Probably due to a duplicate email
            // this.setState({ error: 'Sign Up Failed - Try Again' });
            setError('Login Failed - Try Again')

        }
    }

    return (
        <div className="auth-home flex-ctr">
            <h1>Login</h1>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit} >
                    <label>Name</label>
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} autocomplete="off" required />
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

                    <button type="submit">Login</button>
                </form >
            </div >
            <p className="error-message">&nbsp;{error}</p>
        </div >
    );

}