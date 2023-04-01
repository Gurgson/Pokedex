import { PokemonTypeColor } from "../enums/PokemonTypes";

interface Type {
  slot: number;
  type: {
    name: PokemonTypeColor;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  order: number;
  sprites: {
    front_default: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
  };
  types: [Type, Type | undefined];
}
export interface PokemonListData {
  id: number;
  name: string;
  url: string;
}
