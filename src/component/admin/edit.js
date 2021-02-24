import React, { useEffect } from 'react'
import firebase from '../../Firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Edit = (props) => {
    const refPost = firebase.firestore().collection('blog').where('judul', '==', props.match.params.judul)
    const postRef = firebase.firestore().collection('blog')
    const [isi, setIsi] = useState('')
    const [judul, setJudul] = useState('')

    const getPost = () => {
        refPost.onSnapshot((grabpost)=>{
            const item = []
            grabpost.forEach((doc)=>{
                item.push(doc.data())
            })
            item.forEach((data)=>{
                setJudul(data.judul)
                setIsi(data.isi)
            })
        })
    }

    useEffect(()=>{
        getPost()
    },[])

    const ganti = () =>{
        const baru = {
            judul: judul,
            isi: isi,
            tanggal: firebase.firestore.FieldValue.serverTimestamp()
        }
        postRef.doc(judul)
        .update(baru).catch((er)=>console.log(er.message))
    }

    return (
        <>
        <h1 className='h4 text-center'>Edit Posting</h1>
        <Form>
            <Form.Group>
                <h1 className='h6'>Judul Post</h1>
                <Form.Control type='text' value={judul} onChange={(e)=>setJudul(e.target.value)}/>
            </Form.Group>
        </Form>
                <h1 className='h6'>Isi post</h1>
        <CKEditor editor={ ClassicEditor }
                data={isi}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setIsi(data)
                } }
                />
                <Link to='/dashboard/edit'>
                <Button onClick={ganti} variant='dark'className='mt-3' >Posting</Button>
                </Link>
        </>
    )
}

export default Edit
