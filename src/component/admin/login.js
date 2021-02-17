import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap"
import firebase from '../../Firebase';
import Back from '../back'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [salah, setSalah] = useState()

    const resetInput = () => {
    setEmail("");
    setPassword("");
    };
    
    const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
        resetInput();
        })
        .catch((gabisa) => {
            setSalah(gabisa.message)
        });
    };

    return(
        <Container>
        <Back/>
        <Row className='mt-5' >
            <Col xs='12' sm='8' md='4' className='mx-auto mt-5'>
            <Form className='clearfix shadow login'>
            <p>{salah}</p>
                <h1 className='h4'>Login</h1>
                <Form.Group>
                    <Form.Text>Email</Form.Text>
                    <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Text>Password</Form.Text>
                    <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button onClick={login} variant='dark' className='float-right'>Login</Button>
            </Form>
            </Col>
        </Row>
        </Container>
    )
}
export default Login