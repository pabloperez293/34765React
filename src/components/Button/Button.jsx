import "./button.css";
import { useState } from "react"
// useState es el hook


function Button(props) {
  const [btnColor, setColor] = useState({
    background: "#1BD4A5"
  });

  function handleClick(){
    setColor({
      background: "#00AEBF",
    }); 
  }

  return (
  <>
  {/* esto se utiliza para no poder un div <> */}
   <button id="btn-123"  onClick={ handleClick } style={btnColor} className="btn">
  {props.children}
  </button> 
  </>
  );
}
 
export default Button;