import React from 'react'

function TestPromise() {
    let prom = new Promise ( (res , rej) => {
        setTimeout( () => {
            rej("error en el process ")
        }, 3000
        )
    })

    console.log(prom)

    prom.then( (respuesta ) => {
        console.log("Respuesta recibida genio: ", respuesta)
    } ).catch( (respuestaError) => {
        console.log(respuestaError)
    })

  return (
    <div>TestPromise</div>
  )
}

export default TestPromise