import React , { useState, useEffect} from "react";
import "./itemlistcontainer.css"
import { getAlbums, getAlbumsByCategory } from "../mockApi/mockApi"
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

import { useParams } from "react-router-dom"

function ItemListContainer(props) {
  const [ songList , setSongList ] = useState([]);
  const [ loading , setLoading ] = useState(true)

  // Con esto veremos los parametros que elije 
  const params = useParams()
  const categoryId = params.categoryId 
  
// Controlo con el useefect lo que pido.
  useEffect( () =>{
    setSongList([])
    setLoading(true)
    if( categoryId === undefined) {
        getAlbums().then( ( data ) => {
          setLoading(false)
          setSongList(data)
     })
    } else {
      getAlbumsByCategory( categoryId ).then( ( data ) => {
        setSongList(data)
        setLoading(false)

    })
    }
  },[categoryId])

  return (
    <div className="container">    
    {/* <h2> title</h2> */}
    { loading ? "cargando " : "Listo :D"}
    <ItemList songList={ songList } />
    <hr/>
    <ItemCount text={"Se agrega al carrito "} initial={1} stock={5}/>
    <ItemCount text={"Se agrega al carrito2 "} initial={4} stock={10}/>
    </div>
  );
}
export default ItemListContainer;