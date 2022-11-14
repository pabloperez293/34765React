import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter ,  Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import "./App.css"

// Componente
function App() {
  let misEstilos = { backgroundColor: "grey" };

  return (
    <div style={misEstilos}>          
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/song/:itemid" element= { <ItemDetailContainer />} />
          <Route path="*" element= { <h4> Sorry not found</h4>} />
          <Route path="/category/:categoryId" element= {<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
    </div>

    );
}

export default App;