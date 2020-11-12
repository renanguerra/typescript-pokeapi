import React from 'react'
import './card.css'

interface CardProps {
    name: string;
    img: string;
    xp: string;
    type: string;

}

interface RenderCard {
    show: boolean;
    name: string;
    img: string;
    xp: string;
    type: string;

}

const renderCard: React.FC<RenderCard> = (props)=> {
    const showCard = props.show;
    if (showCard){
        return <Card name={props.name} img={props.img} xp={props.xp} type={props.type}/>
    }
    else {
        return <p></p>
    }
    
}
const Card: React.FC<CardProps> = (props) => {
    return(
    <div className="card">
        <div className="header-card">
            <img src={props.img} alt="" className="pokeimg"/>
        </div>

        <div className="body-card">
            <h2>Nome: {props.name}</h2>
            <h2>Xp inicial: {props.xp} pontos</h2>
            <h2>Tipo: {props.type}</h2>

        </div>
    </div>
    )
}

export default renderCard;