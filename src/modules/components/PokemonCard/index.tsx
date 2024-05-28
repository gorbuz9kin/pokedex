import styles from './pokemon-card.module.scss';

type Props = {
  title: string;
  bannerUrl: string;
  onClick: () => void;
};

const PokemonCard = ({ title, bannerUrl, onClick }: Props) => {
  return (
    <div className={styles.pokemon__item} onClick={onClick}>
      <div className={styles.pokemon__banner}>
        <img src={bannerUrl} alt={title} />
      </div>
      <p className={styles.pokemon__title}>{title}</p>
    </div>
  );
};

export default PokemonCard;
