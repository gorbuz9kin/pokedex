import { useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useApi } from '@/hooks';
import { Loader, ErrorMessage, Breadcrumbs } from '@/components';
import { BASE_URL } from '@/configs';
import { PokemonDetailsType } from '@/types';
import styles from './pokemon.module.scss';

const Pokemon = () => {
  const { isLoading, data, error, fetchData } = useApi();
  const { id } = useParams();

  const getPokemonData = useCallback(async () => {
    await fetchData({
      path: `${BASE_URL}pokemon/${id}`,
    });
  }, []);

  useEffect(() => {
    getPokemonData();
  }, []);

  if (error) {
    return <ErrorMessage text={error as string} />;
  }

  if (isLoading || !data) {
    return <Loader />;
  }

  const {
    types,
    height,
    weight,
    stats,
    id: pokemonId,
  } = data as PokemonDetailsType;

  const dataConfig = [
    {
      label: 'Types',
      value: types?.map((type: any) => type.type.name).join(', '),
    },
    {
      label: 'Height',
      value: height,
    },
    {
      label: 'Weight',
      value: weight,
    },
    {
      label: 'HP',
      value: stats[0]?.base_stat,
    },
    {
      label: 'Attack',
      value: stats[1]?.base_stat,
    },
    {
      label: 'Defense',
      value: stats[2]?.base_stat,
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs currentPage={`${id}`} />
      <div className={styles.info}>
        <div className={styles.banner}>
          <img
            src={process.env.PUBLIC_URL + `/assets/${pokemonId}.png`}
            alt={id}
          />
        </div>
        <div className={styles.details}>
          <h1 className={`roboto-bold ${styles.name}`}>{id}</h1>
          {dataConfig.map(data => (
            <div key={data.label} className={styles.data}>
              <p className="">{data.label}</p>
              <p className="">{data.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
