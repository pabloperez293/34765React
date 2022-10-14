import React from 'react'
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper"

function ItemList( props ) {
  return <>
<FlexWrapper>
{/* Se coloca el map para que cuente la data y lo rellenamos con las props los elementos */}
    { props.songList.map( (temas)  => {
return(
    <Card 
    id={temas.id}
    key={temas.id}
    title={temas.title}
    img={temas.img} 
    price={temas.price} 
    detail={temas.detail}     
    stock={temas.stock}
    expired={temas.expired}     
    />
    ) 
    } ) }
</FlexWrapper>
  </>
}

export default ItemList;


