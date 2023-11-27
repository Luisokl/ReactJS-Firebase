import { useState } from "react";
import { db } from "./firebaseConnection";


import { addDoc, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore'


import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

async function handleAdd() {
  /*await setDoc(doc(db, "Posts", "12345"), {
    titulo: titulo,
    autor: autor,
  })
  .then(() => {
    console.log("REGISTRADO COM SUCESSO.")
  })
  .catch((error) => {
    console.log("ERRO" + error)
  })*/

  await addDoc(collection(db, "Posts"), {
    titulo: titulo,
    autor: autor,
  })
  .then(() => {
    console.log("REGISTRADO!")
    setTitulo('')
    setAutor('')
  })
  .catch((error) => {
    console.log('ERRO!' + error)
  })
}

async function buscarPosts() {

  /*const postRef = doc(db, "Posts", "12345")
  await getDoc(postRef)
  .then((snapshot) => {
    setTitulo(snapshot.data().titulo)
    setAutor(snapshot.data().autor)
  })
  .catch((error) => {
    console.log("ERRO" + error)
  })*/

  const postRef = collection(db, "Posts")
  await getDocs(postRef)
  .then((snapshot) => {
    let lista = [];

    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        titulo: doc.data().titulo,
        autor: doc.data().autor,
      })
    })
    
    setPosts(lista)
  })

  .catch((error) => {
    console.log('Erro ao buscar' + error)
  })

}

  return (
    <div className="App">
      <h1>React JS + Firebase :) </h1>

      <div className="container">
        <label>Titulo:</label>
        <textarea type="text" placeholder="Digite o titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        
        <label>Autor:</label>
        <textarea type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}></textarea>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPosts}>Buscar Posts</button>
      </div>

      <ul>
        {posts.map( (posts) => {
          return(
            <li key={posts.id}>
              <span>Titulo: {posts.titulo}</span><br/>
              <span>Autor: {posts.autor}</span><br/><br/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
