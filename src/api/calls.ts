import { apiGet } from './methods';
import { PokemonDataResponse, PokemonNamesResponse } from './types';

async function getPokemonData(pokemonName: string): Promise<PokemonDataResponse> {
  return apiGet(`/pokemon/${pokemonName}`);
}

async function getAllPokemonNames(): Promise<PokemonNamesResponse> {
  return apiGet('/pokemon?limit=100000&offset=0');
}

export const api = {
  getPokemonData,
  getAllPokemonNames,
};
