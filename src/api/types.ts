export type PokemonDataResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonNamesResponse = {
  results: {
    name: string;
  }[];
};
