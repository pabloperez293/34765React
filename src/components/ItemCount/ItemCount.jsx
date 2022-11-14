import React, { useState } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Button from '../Button/Button';
import "./itemcount.css";


export default function ItemCount({ stock , initial , text, onAddToCart }){
    const [ count, setCount] = useState(initial)

    function handleSubstract() {
       if( count > 1 ) setCount( count - 1 )
    }

    function handleAdd() {
       if ( count < stock )  setCount( count + 1 )
    }


return (
    <div className='itemcount_container'>
        <FlexWrapper>
        <div>
            <h2> Realice su compra</h2>
            <div className='itemcount_control'>
            <Button onClick={ handleSubstract }> - </Button>
            
            <strong> { count }</strong>
            <Button onClick={ handleAdd }> + </Button>
            </div>
        </div>

        <div className='itemcount_btns'>
            <Button onClick={ ()=> { onAddToCart(count)} }> {text} </Button>
        </div>
        </FlexWrapper>
    </div>
    )
}