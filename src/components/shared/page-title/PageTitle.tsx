import { CONSTANTS } from '../../../constants';
import { usePageTitle } from '../../../hooks/shared/usePageTitle';
import styles from './PageTitle.module.css';

type Props = {
  title?: string;
  pageTitle?: string;
};

const PageTitle = ({ title = CONSTANTS.APP_NAME, pageTitle }: Props) => {
  usePageTitle(pageTitle || title);

  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
