import { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import Back from "../back"
import firebase from '../../Firebase'

const Work = () => {

    const [gambar, setGambar] = useState([])
    const ref = firebase.firestore().collection('work')

    const getImage=()=>{
        ref.onSnapshot((ambil)=>{
            const item = []
            ambil.forEach((doc)=>{
                item.push(doc.data())
            })
            setGambar(item)
        })
    }
    
    useEffect(()=>{
        getImage()
        return(()=>{
            setGambar([])
        })
    },[])
    return(
        <Container>
        <Back/>
        <h1>Work</h1>
        <Row>
        {gambar.map((isi)=>(
                <Col xs='12' md='6' key={isi.id}>
                    <Image className='shadow mb-3' src={isi.gambar} fluid/>
                </Col>
        ))}
        </Row>
        </Container>
    )
}

export default Work