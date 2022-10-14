import { useState } from "react";
import Button from "../Button/Button";
import "./card.css";

  export default function Card(props) {
    const [ expired, setExpired ] = useState(props.expired)

    const cardStyles ={
      margin:"10px 15px",
      minHeight:"420px",
      width:"280px",
      height:"100%",
      borderRadius: "4px",
      boxShadow: "0px 0px 4px rgba(0,0,0,0.50)",
      backgroundColor: expired ? "#555" : "#fff",
      overflow: "hidden",
      transition:"all 0.20s ease-in",
      cursor: "pointer",
    }
  const priceStyle ={
    color: props.offer === true ? "green": "black",
  };
  const imgStyle ={
    filter: expired ? "grayscale(100%) blur(1px)" : "none",
  };

  function handleCardClick() {
    // con este operador ! lo convierte en el estado que este cambiandolo
    setExpired( !expired )

  }
  return (
    <>
      <div onClick={ handleCardClick} className="card m-2" style={cardStyles}>
        <div className="card-img">
          <img style={imgStyle} src={props.img} alt={props.title}></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          <p>{props.detail}</p>
          <h4 style={ priceStyle }>
          {props.offer ? <p>oferton</p>: <></>} $ {props.price }
          </h4>
        </div>

        <Button otraprop="otraprop">{`Comprar ${props.title}`}
          <ion-icon name="heart-outline"></ion-icon>
        </Button>
      </div>
    </>
  );
}