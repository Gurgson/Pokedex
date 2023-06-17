interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}
interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
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
    other: {
      "official-artwork": {
        front_default: string;
        front_shiny?: string;
      };
    };
  };
  stats: PokemonStat[];
  types: [PokemonType, PokemonType | undefined];
}

export interface PokemonListData {
  id: number;
  name: string;
  url: string;
}
