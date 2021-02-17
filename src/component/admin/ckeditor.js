
import firebase from '../../Firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Ckedit = () => {
    const refPost = firebase.firestore().collection('blog')
    const [isi, setIsi] = useState('')
    const [judul, setJudul] = useState('')

    const reset = () => {
        setIsi('')
        setJudul('')
    }

    const addPost = () => {
        const baru = {
            judul,
            isi,
            tanggal: firebase.firestore.FieldValue.serverTimestamp()
        }
        refPost.doc(baru.judul).set(baru).then(reset()).catch((er)=>{console.log(er.message)})
    }

    return (
        <>
        <h1 className='h4'>Posting Baru</h1>
        <Form>
            <Form.Group>
                <h1 className='h6'>Alamat di websitemu</h1>
                <Form.Control type='text' value={judul} onChange={(e)=>setJudul(e.target.value)}/>
                <Form.Text>Contoh: https://website.com/blog/judul%20post</Form.Text>
            </Form.Group>
        </Form>
                <h1 className='h6'>Isi postingan</h1>
        <CKEditor editor={ ClassicEditor }
                data={isi}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setIsi(data)
                } }
                />
                <Button onClick={addPost} variant='dark'className='mt-3' >Posting</Button>
        </>
    )
}

export default Ckedit