import React, {useState} from 'react';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Card from './components/Card/index'
import axios from 'axios'

import './app.css'


function App() {
const [pokemon,setPokemon] = useState('')
const [pokename,setPokename] = useState('')
const [pokeimg,setPokeimg] = useState('')
const [pokeheight,setPokeheight] = useState('')
const [pokeweight,setPokeweight] = useState('')

const getPokemon = () => {

  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  axios.get(url)
  .then((res)=> {
   setPokename(res.data.name)
   setPokeimg(res.data.sprites.front_default)
   setPokeheight(res.data.height)
   setPokeweight(res.data.weight)
  })
  .catch((e)=>{console.log(e)})
}

  return (
    <div className="App">
      <Header/>

      <div className="main">
          <h2 className='text-logo'>Digite o Nome do pokemon</h2>
          <input onChange={(e)=>{setPokemon(e.target.value)}} type="text" id='inputname' className="inputname" placeholder='Digite o nome aqui'/>
          <button onClick={() => getPokemon()}>Enviar</button>
      </div>

      <Card name={pokename} img={pokeimg} height={pokeheight} weight={pokeweight}/>  

      <Footer/>
    </div>
  );
}

export default App;
