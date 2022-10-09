import React from "react";
import "./flexwrapper.css";

function FlexWrapper(props) {
  return (
    <>
      <h1 className="text-center">Listado de nuestros cursos</h1>
      <div className="flex">{props.children}</div>
    </>
  );
}

export default FlexWrapper;