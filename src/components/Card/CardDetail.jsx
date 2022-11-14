import React, {useState} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount  from "../ItemCount/ItemCount";
import "./itemdetail.css"


function CardDetail({song}) {
    const [count, setCount] = useState(0)

    function handleAddToCart(count) {
        console.log("Agregaste items al carrito",count)
        setCount(count)
    }

return(
    <div className="detailContainer">
        <div className="cardDetail_imgDetail">
            {/* <img src={song.img} alt={song.title}/> */}
        </div>
        <FlexWrapper>
            <div className="main container">
                <h2>{song.title}</h2>
                <img src={song.img} alt={song.title} />
                <h4 className="cardDetail_muteD"> {song.category}</h4>
                <h3> ${song.price}</h3>

                <p>{song.detail}</p>
            </div>

            {/* onAddToCart se encuentra en ItemCount */}
            { count === 0 ? <ItemCount onAddToCart={ handleAddToCart} stock={4} inital={1} text="Agregar al carrito" />
             : <a href="/x">Link para ver el carrito</a>}
            {/* esto es para renderizar esta condicion, por el cambio de estado */}

        </FlexWrapper>
    </div>
);
}
export default CardDetail