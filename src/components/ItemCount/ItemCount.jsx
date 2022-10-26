import React, { useState } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Button from '../Button/Button';
import "./itemcount.css";


export default function ItemCount({ stock , initial , text, onAddToCart }){
    const [ count, setCount] = useState(initial)

    function handleSubstract(){
       if( count > 1 ) setCount ( count - 1 )
    }
    function handleAdd(){
       if ( count < stock )  setCount ( count + 1 )
    }
    function handleAddToCart(){
        console.log("Agregar al carrito", count)
    }


return (
    <div className='itemcount_container'>
        <FlexWrapper>
        <div>
            <h2> Realice su compra</h2>
            <div className='itemcount_control'>
            <Button onSubstract={ handleSubstract }> - </Button>
            <strong> { count }</strong>
            <button onClick={ handleAdd }> + </button>
            </div>
        </div>

        <div className='itemcount_btns'>
            <button onClick={ handleAddToCart}>{text} </button>
        </div>
        </FlexWrapper>
    </div>
    )
}