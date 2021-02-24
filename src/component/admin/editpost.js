import { useEffect, useState } from 'react'
import firebase from '../../Firebase'
import { Button, Table } from "react-bootstrap"
import {Link} from 'react-router-dom'

const Editpost = () => {
    const [posts, setPosts] = useState([])
    const postref = firebase.firestore().collection('blog')
    const [gagal, setGagal] = useState('')

    const getPosts = () => {
        postref
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

    const hapus = (buang) => {
        postref.doc(buang.judul)
        .delete().catch(()=>setGagal('***Sory hanya admin yang bisa hapus post***'))
        }

    return (
        <div>
        <h1 className='h4 text-center'>Edit Post</h1>
        <h1 className='h6' onClick={()=>setGagal('')} >{gagal}</h1>
        <Table striped hover bordered>
        <thead>
            <tr>
                <th>Judul post</th>
                <th>Edit</th>
                <th>Hapus</th>
            </tr>
        </thead>
        <tbody>
            {posts.map((blog)=>(
                <tr key={blog.judul}>
                    <td>{blog.judul}</td>
                    <td><Button variant='dark'><Link style={{color:'#fff'}} to={`/dashboard/post/${blog.judul}`}>Edit</Link></Button></td>
                    <td><Button onClick={()=>hapus(blog)}variant='dark' >Hapus</Button></td>
                </tr>
            ))}
        </tbody>
        </Table>
        </div>
    )
}

export default Editpost
