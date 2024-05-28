import styles from './error.module.scss';

const ErrorMessage = ({ text }: { text: string }) => (
  <div className={styles.wrapper}>
    <p>{text}</p>
  </div>
);

export default ErrorMessage;
