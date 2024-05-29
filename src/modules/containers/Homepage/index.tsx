import { useCallback } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetchPokemons } from '@/api';
import { PokemonCard, Loader, Pagination } from '@/components';
import { PAGES_COUNT } from '@/configs';
import { getPokemonIdFromUrl } from '@/utils';
import { Pokemon, PokemonsResponseType } from '@/types';
import styles from './homepage.module.scss';

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParams = Object.fromEntries([...searchParams]);
  const currentPage = urlParams?.page ? Number(urlParams?.page) - 1 : 0;
  const { isLoading, data } = useFetchPokemons(currentPage);
  const navigate = useNavigate();

  const onSelectPokemon = useCallback(
    (value: string) => {
      navigate(`/${value}`);
    },
    [navigate],
  );

  const onPageChange = useCallback(
    (event: { selected: number }) => {
      setSearchParams({ page: `${event.selected + 1}` });
    },
    [setSearchParams],
  );

  if (isLoading || !data) {
    return <Loader />;
  }

  const { results } = data as PokemonsResponseType;

  return (
    <div className={styles.container}>
      <h1 className={`roboto-bold ${styles.title}`}>Pokedex</h1>
      <div className={styles.wrapper}>
        <div className={styles.pokemons__list}>
          {results?.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.name}
              title={pokemon.name}
              id={getPokemonIdFromUrl(pokemon.url)}
              onClick={() => onSelectPokemon(pokemon.name)}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={PAGES_COUNT}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Homepage;
