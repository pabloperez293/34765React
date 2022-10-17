import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter ,  Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";


// Componente
function App() {
  let misEstilos = { backgroundColor: "grey" };

  return (
    <div style={misEstilos}>          
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra plataforma de Musica" />} />
          <Route path="/song/:id" element= { <ItemDetailContainer />} />
          <Route path="*" element= { <h4> Sorry not found</h4>} />
          <Route path="/category/:id" element= {<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
    </div>

    );
}

export default App;