import React , { useState, useEffect} from "react";
import "./itemlistcontainer.css"
import { getAlbums } from "../mockApi/mockApi"
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

// import { useParams } from "react-router-dom"

function ItemListContainer(props) {
  const [ songList , setSongList ] = useState([]);

  // const {  } = ()
  
// Controlo con el useefect lo que pido.
  useEffect( () =>{
    getAlbums().then( ( data ) => {
      setSongList(data)
     })
  },[]
) 
  return (
    <div className="container">    
    <h2> title</h2>
    <ItemList songList={ songList } />
    <hr/>

    <ItemCount text={"Se agrega al carrito "} initial={1} stock={5}/>
    <ItemCount text={"Se agrega al carrito2 "} initial={4} stock={10}/>

    </div>
  );
}
export default ItemListContainer;