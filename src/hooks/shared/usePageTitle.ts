import { useEffect } from 'react';
import { CONSTANTS } from '../../constants';

export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = `${CONSTANTS.APP_NAME}${pageTitle ? ` - ${pageTitle}` : ''}`;
  }, [pageTitle]);
}
