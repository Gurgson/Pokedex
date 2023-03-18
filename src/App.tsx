import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "./interfaces/Pokemon";
import Landing from "./pages/Landing";
import PokemonAbout from "./pages/PokemonAbout";
import PokemonsList from "./pages/PokemonsList";

interface IDataStorage {
  pokemon: Pokemon[];
}
const initialDataStorage: IDataStorage = {
  pokemon: [],
};
export const AppDataContext = createContext<IDataStorage>(initialDataStorage);

function App() {
  return (
    <BrowserRouter>
      <AppDataContext.Provider value={initialDataStorage}>
        <Routes>
          <Route index path="/" element={<Landing />} />

          <Route path="/pokemon" element={<PokemonsList />} />
          <Route path="pokemon/:query" element={<PokemonAbout />} />
        </Routes>
      </AppDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
