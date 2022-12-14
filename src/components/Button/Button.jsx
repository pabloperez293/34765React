import { useState } from "react"
import "./button.css";
// useState es el hook

export default function Button(props) {
  const [btnColor, setColor] = useState({
    background: "#1BD4A5"
  });
  //no utilizamos mas el cambio de componenes y lo quitamos del importacion
  // console.log("%c Renderiza el componente", "color:blue")

  // useEffect(() => {
  //   console.log("montaje de los componentes")
  // }, [])

  // useEffect(() => {
  //   console.log("montaje de los componentes", "color:grey")
  // }, [btnColor])

  function handleClick(){
    props.onSubstract()
    setColor({background: "#00AEBF"}); 
  }
  return (  
//* esto se utiliza para no poder un div <> */}
   <button onClick={ handleClick } style={btnColor} className="btn">
  {props.children}
  </button> 
  );
}
 
// export function ButtonB(){
//   return <button>click</button>
// }