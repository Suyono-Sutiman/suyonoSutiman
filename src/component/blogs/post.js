import { useState } from "react"
import firebase from '../../Firebase'
import { Link} from "react-router-dom"
import { useEffect } from "react"
import Back from "../back"
import { Container } from "react-bootstrap"

const BlogPost = (props) => {
    const [post, setPost] = useState([])
    const postRef = firebase.firestore().collection('blog').where('judul', '==', props.match.params.judul)
    const [tanggal, setTanggal] = useState()
    const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    const getPost = () => {
        postRef
        .onSnapshot((grabPost)=>{
            const items = []
            grabPost.forEach((doc)=>{
                items.push(doc.data())
            })
            items.forEach((data)=>{
                const item = {
                    judul: data.judul,
                    isi: data.isi,
                    desc: data.desc,
                    date: data.tanggal.seconds
                }
            setPost(item)
            setTanggal(item.date * 1000)
            })
        })
    }

    useEffect(()=>{
        getPost()
    },[])

    return (
        <Container className='clearfix' >
            <Back/>
            <h1 className='h5 clearfix'><Link to='/blog' className='float-right'><sup></sup> ←Kembali</Link></h1>
            <p>{new Date(tanggal).toLocaleDateString('id',option)}</p>
        <div dangerouslySetInnerHTML={{__html:post.isi}} >
        </div>
        </Container>
    )
}
export default BlogPost
