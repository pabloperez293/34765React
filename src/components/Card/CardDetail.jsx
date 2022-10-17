import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount  from "../ItemCount/ItemCount";


function CardDetail(props){
    return(
        <div className="detailContainer">
            <FlexWrapper>
                <div className="main container">
                    <h2>{props.title}</h2>
                    <img src={props.img} alt={props.title} />
                    <h3> ${props.price}</h3>
                </div>
                <ItemCount stock={4} inital={1} text="Agregar al carrito" />
            </FlexWrapper>
        </div>
    );
}
export default CardDetail