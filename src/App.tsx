import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingOption from "./components/LandingOption/LandingOption";
import Landing from "./pages/Landing";
import PokemonsList from "./pages/PokemonsList";

function App() {
  const [pokemonsData, setPokemonsData] = useState(null);
  // const AppContext = createContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/Pokemons" element={<PokemonsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
