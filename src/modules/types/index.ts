export type FETCH_METHOD = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonsResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export type PokemonDetailsType = {
  types: { slot: number; type: { name: string; url: string } }[];
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: 'hp' | 'attack' | 'defense';
      url: string;
    };
  }[];
  id: number;
};

export enum QueryKeys {
  POKEMONS = 'pokemons',
  POKEMON = 'pokemon',
}
