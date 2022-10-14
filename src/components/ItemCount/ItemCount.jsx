import React, { useState } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Button from '../Button/Button'

export default function ItemCount({ stock , inital , text}){
    const [ count, setCount] = useState(inital)

    function handleSubstract(){
       if( count > 1 ) setCount ( count - 1 )
    }
    function handleAdd(){
       if ( count < 10 )  setCount ( count + 1 )
    }

    return (
        <div>
            <h2> Realice su compra</h2>
            <FlexWrapper>
            <Button onClick={ handleSubstract }> - </Button>
            <strong> { count }</strong>
            <Button onClick={ handleAdd }> + </Button>
            </FlexWrapper>
            <Button> { text }</Button>
        </div>
    )
}