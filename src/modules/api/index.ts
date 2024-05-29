import { useQuery } from '@tanstack/react-query';

import {
  BASE_URL,
  POKEMONS_PER_PAGE,
  TOTAL_POKEMONS,
  PAGES_COUNT,
} from '@/configs';
import { QueryKeys } from '@/types';

const BASE_HEADERS = {
  'Content-Type': 'application/json',
};

export const useFetchPokemons = (page: number) => {
  return useQuery({
    queryKey: [QueryKeys.POKEMONS, page],
    queryFn: async () => {
      try {
        const offset = !page ? 0 : (page * POKEMONS_PER_PAGE) % TOTAL_POKEMONS;
        const limit =
          PAGES_COUNT === page + 1
            ? TOTAL_POKEMONS - POKEMONS_PER_PAGE * page
            : POKEMONS_PER_PAGE;
        const resp = await fetch(
          `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`,
          {
            headers: BASE_HEADERS,
          },
        );
        const data = await resp.json();
        return data;
      } catch (e) {
        console.warn('ERROR FETCH POKEMONS', e);
      }
    },
  });
};

export const useFetchPokemon = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.POKEMON, id],
    queryFn: async () => {
      try {
        const resp = await fetch(`${BASE_URL}pokemon/${id}`, {
          headers: BASE_HEADERS,
        });
        const data = await resp.json();
        return data;
      } catch (e) {
        console.warn('ERROR FETCH POKEMON', e);
      }
    },
    staleTime: 0,
    gcTime: 0,
  });
};
