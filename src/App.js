import React, { useEffect, useState } from 'react'
import './App.css';
import firebase from './Firebase'

function App() {

  const [list, setList] = useState([])

  const ref = firebase.firestore().collection('buku')

  const getItem = ()=>{
    ref.onSnapshot((querySnapshot)=>{
      const item = []
      querySnapshot.forEach((doc)=>{
        item.push(doc.data())
      })
      setList(item)
    })
  }

  useEffect(()=>{
    getItem()
  },[])

  console.log(list)

  return (
    <div className="App">
      {list.map((buku)=>(
        <div key={buku.desc}>
          <h1>{buku.judul}</h1>
          <h1>{buku.desc}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
