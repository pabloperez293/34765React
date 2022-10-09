import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import CartWidget from "./components/Navbar/CartWidget";

// Componente
function App() {
  let misEstilos = { backgroundColor: "grey" };

  return (
    <div style={misEstilos}>
    <Router >
      <NavBar>
      </NavBar>
    </Router>
      <CartWidget />
    <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;