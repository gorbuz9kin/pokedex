import { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useApi } from '@/hooks';
import { PokemonCard, Loader, ErrorMessage } from '@/components';
import { BASE_URL } from '@/configs';
import { Pokemon, PokemonsResponseType } from '@/types';
import styles from './homepage.module.scss';

const Homepage = () => {
  const { isLoading, data, error, fetchData } = useApi();
  const navigate = useNavigate();

  const getPokemons = useCallback(async (offset: number) => {
    await fetchData({
      path: `${BASE_URL}pokemon?limit=20&offset=${offset}`,
    });
  }, []);

  useEffect(() => {
    getPokemons(0);
  }, []);

  const onSelectPokemon = useCallback((value: string) => {
    navigate(`/${value}`);
  }, []);

  if (error) {
    return <ErrorMessage text={error as string} />;
  }

  if (isLoading || !data) {
    return <Loader />;
  }

  const { results } = data as PokemonsResponseType;

  return (
    <div className={styles.container}>
      <h1 className={`roboto-bold ${styles.title}`}>Pokedex</h1>
      <div className={styles.pokemons__list}>
        {results?.map((pokemon: Pokemon, index: number) => (
          <PokemonCard
            key={pokemon.name}
            title={pokemon.name}
            bannerUrl={process.env.PUBLIC_URL + `/assets/${index + 1}.png`}
            onClick={() => onSelectPokemon(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
