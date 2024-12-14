import styles from './Accordion.module.css';
import { AccordionItem } from './types';

type Props = {
  name?: string;
  items: AccordionItem[];
};

const Accordion = ({ name, items }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <details key={`${item.title}_${index}`} className={styles.details} name={name}>
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
