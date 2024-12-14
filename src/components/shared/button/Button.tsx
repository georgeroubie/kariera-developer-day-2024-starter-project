import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  variation?: 'primary' | 'error';
  onClick?: () => void;
};

const Button = ({ className = '', disabled, variation = 'primary', children, onClick }: Props) => {
  return (
    <button className={`${className} ${styles.button} ${styles[variation]}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
