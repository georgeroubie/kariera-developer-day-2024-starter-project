import { ReactElement, ReactNode } from 'react';
import styles from './SubTitle.module.css';

type Props = {
  children: ReactNode;
};

const SubTitle = ({ children }: Props): ReactElement => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default SubTitle;
