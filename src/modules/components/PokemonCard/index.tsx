import styles from './pokemon-card.module.scss';

type Props = {
  title: string;
  id: number;
  onClick: () => void;
};

const PokemonCard = ({ title, id, onClick }: Props) => {
  return (
    <div className={styles.pokemon__item} onClick={onClick}>
      <div className={styles.pokemon__banner}>
        <img src={process.env.PUBLIC_URL + `/assets/${id}.png`} alt={title} />
      </div>
      <p className={styles.pokemon__title}>{title}</p>
    </div>
  );
};

export default PokemonCard;
