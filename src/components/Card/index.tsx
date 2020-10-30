import React from 'react'
import './card.css'

interface CardProps {
    name: string;
    img: string;
    height: string;
    weight: string;

}

const Card: React.FC<CardProps> = (props) => {
    return(
    <div className="card">
        <div className="header-card">
            <img src={props.img} alt="" className="pokeimg"/>
        </div>

        <div className="body-card">
            <h2>Nome: {props.name}</h2>
            <h2>Altura: {props.height}</h2>
            <h2>Peso: {props.weight}</h2>

        </div>
    </div>
    )
}

export default Card;