import { useContext, useState } from 'react'
import { Col, Row, Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import firebase from '../../Firebase';
import {AuthContext} from '../admin/auth'

const Admin = ({children}) => {
    const {currentUser} = useContext(AuthContext)
    const welcome = currentUser.email=='yonoraphael@gmail.com' ? 'Admin' : 'Stranger'
    const [mobile, setMobile] = useState(false)

    const logOut = () => {
        firebase.auth().signOut();
      };

    return(
        <>
        <div className='side clearfix'>
            <h1 className='h3 d-inline-block'>Dashboard</h1>
            <h1 className='h3 d-inline-block float-right d-lg-none' style={{cursor:'pointer'}} onClick={()=>setMobile(!mobile)}>三</h1>
            <Button variant='light'className='d-none d-lg-block float-right mt-2' onClick={logOut}><h1 className='h6'>Log Out</h1></Button>
            <h1 className='h6' >Selamat Datang : {welcome}</h1>
        </div>
        <Container fluid>
        <Row>
            <Col xs='12' lg='2' className={mobile ? 'd-block pt-3 side' : 'd-none d-lg-block pt-3 side'}>
            <Link to='/dashboard/baru'><h1 className='h6' onClick={()=>setMobile(!mobile)}>Posting Baru</h1></Link><br/>
            <Link to='/dashboard/edit'><h1 className='h6' onClick={()=>setMobile(!mobile)}>Edit Postingan</h1></Link><br/>
            <Button variant='light' className='d-lg-none float-right mb-2' onClick={logOut}>Log Out</Button>
            </Col>
            <Col className='px-lg-5 pt-2 admin-right'>
            <div>{children}</div>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Admin