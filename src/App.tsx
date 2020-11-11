import React, {useState} from 'react';
import Card from './components/Card/index'
import axios from 'axios'


import './app.css'


function App() {
const [pokemon,setPokemon] = useState('')
const [pokename,setPokename] = useState('')
const [pokeimg,setPokeimg] = useState('')
const [pokexp,setPokexp] = useState('')
const [poketype,setPoketype] = useState('')

const getPokemon = () => {

  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  axios.get(url)
  .then((res)=> {
   setPokename(res.data.name)
   setPokeimg(res.data.sprites.front_default)
   setPokexp(res.data.base_experience)
   setPoketype(res.data.types[0].type.name)
   console.log(res.data)
  })
  .catch((e)=>{
    console.log(e)
    alert('Verifique se o nome do pokemon está correto.')
  })
}

  return (
    <div className="App">

      <div className="lateral">
        <img className='logo' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true" alt="logo"/>
        
        <div className="main">
          <h2 className='text-logo'>Digite o Nome do pokemon</h2>
          <input onChange={(e)=>{setPokemon(e.target.value.toLowerCase())}} type="text" id='inputname' className="inputname" placeholder='Digite o nome aqui'/>
          <p><input type='button' className='inputbutton' onClick={() => getPokemon()} value='Enviar'/></p>
        </div>
      
      </div>

      <Card name={pokename} img={pokeimg} xp={pokexp} type={poketype}/>  

    </div>
  );
}

export default App;
