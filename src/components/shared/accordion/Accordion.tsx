import styles from './Accordion.module.css';
import { AccordionItem } from './types';

type Props = {
  items: AccordionItem[];
};

const Accordion = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <details key={`${item.title}_${index}`} className={styles.details}>
          <summary className={styles.summary}>
            <span className={`${styles.arrow} ${styles.arrowBottom}`}>▽</span>
            <span className={`${styles.arrow} ${styles.arrowTop}`}>△</span>
            {item.title}
          </summary>
          <p className={styles.content}>{item.content}</p>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
