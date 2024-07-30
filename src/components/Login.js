import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please fill in both fields.');
        } else {
            setError('');
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <h2 className="mb-4 text-center">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
