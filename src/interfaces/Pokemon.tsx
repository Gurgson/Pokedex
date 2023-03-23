interface Type {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
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
