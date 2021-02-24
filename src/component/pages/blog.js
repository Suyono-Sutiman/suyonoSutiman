import { useState } from "react"
import Back from "../back"
import firebase from '../../Firebase'
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {Link} from 'react-router-dom'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const postRef = firebase.firestore().collection('blog')
    const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    const getPosts = () => {
        postRef
        .orderBy('tanggal', 'desc')
        .limit(10)
        .onSnapshot((takePost)=>{
            const items = []
            takePost.forEach((doc)=>{
                items.push(doc.data())
            })
            setPosts(items)
        })
    }
    useEffect(()=>{
        getPosts()
        return(()=>{
            setPosts([])
        })
    },[])
    
    return(
        <Container>
        <Back/>
        <h1>Blog</h1>
        <Row>
            {posts.map((blog)=>(
                <Col xs='12' md='6' key={blog.tanggal}>
                    <div className='clearfix'>
                    <p className='float-right' >
                        {new Date(blog.tanggal.seconds * 1000).toLocaleDateString('id',option)}
                    </p>
                    </div>
                    <Link to={`/post/${blog.judul}`}>
                    <h1 className='h5'>{blog.judul}</h1>
                    <div dangerouslySetInnerHTML={{__html:blog.isi.substring(0,250)}}></div>
                    </Link>
                </Col>
            ))}
        </Row>
        </Container>
    )
}

export default Blog