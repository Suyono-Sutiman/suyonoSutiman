
import firebase from '../../Firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Ckedit = () => {
    const refPost = firebase.firestore().collection('blog')
    const [isi, setIsi] = useState('')
    const [judul, setJudul] = useState('')
    const [joke, setJoke] = useState('')
    const [gagal, setGagal] = useState('')

    const reset = () => {
        setIsi('')
        setJudul('')
    }

    const addPost = () => {
        if (judul=='',isi==''){
            return(
                setGagal('***Tolong isi semua kolom***')
            )
        }
        const baru = {
            judul,
            isi,
            tanggal: firebase.firestore.FieldValue.serverTimestamp()
        }
        refPost.doc(baru.judul).set(baru).then(reset()).catch(()=>setJoke('Sorry ini cuma akun demo'),setGagal(''))
    }


    return (
        <>
        <h1 className='h4 text-center'>Posting Baru</h1>
        <h1 className='h4 text-center' onClick={()=>setJoke('')} style={{color:'#DD0000'}}>{joke}</h1>
        <h1 className='h6 muted' onClick={()=>setGagal('')}>{gagal}</h1>
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
                <Button onClick={addPost} variant='dark'className='mt-3' >Posting</Button>
        </>
    )
}

export default Ckedit