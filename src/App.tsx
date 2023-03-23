import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetails } from "./interfaces/Pokemon";
import Landing from "./pages/Landing";
import PokemonAbout from "./pages/PokemonAbout";
import PokemonList from "./pages/PokemonList";

interface IDataStorage {
  pokemon: PokemonDetails[];
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

          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="pokemon/:query" element={<PokemonAbout />} />
        </Routes>
      </AppDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
