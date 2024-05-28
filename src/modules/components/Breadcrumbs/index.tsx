import { Link } from 'react-router-dom';

import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ currentPage }: { currentPage: string }) => (
  <div className={styles.breadCrumbs}>
    <Link className="roboto-bold" to="/">
      Home
    </Link>
    <p className="roboto-bold">{`/ ${currentPage}`}</p>
  </div>
);

export default Breadcrumbs;
