import React , { useState, useEffect} from "react";
import "./itemlistcontainer.css"
import { getAlbums } from "../mockApi/mockApi"
import ItemList from "./ItemList";


function ItemListContainer(props) {
  const [ songList, setSongList ] = useState([]);

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
    <ItemList songList={songList} />
    </div>
  );
}

export default ItemListContainer;
