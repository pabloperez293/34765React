import React , { useState, useEffect} from "react";
import { getUnAlbums } from "../mockApi/mockApi"

import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "../Card/CardDetail"

// leer param de url
import { useParams } from "react-router-dom"

function ItemDetailContainer(props) {
  const [ song , setAlbum ] = useState([]);

//  llamamos desdel el mockapi al id por param
const { id } = useParams()

// Controlo con el useefect lo que pido.
  useEffect( () =>{
    getUnAlbums(id).then( ( data ) => {
      setAlbum(data)
     })
  },[id]
) 
  return (
    <FlexWrapper>
        <CardDetail    
            id={song.id}
            key={song.id}
            title={song.title}
            img={song.img} 
            price={song.price} 
            detail={song.detail}     
            stock={song.stock}
            expired={song.expired} 
            />
    </FlexWrapper>    
  );
}
export default ItemDetailContainer;