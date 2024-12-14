import { CONSTANTS } from '../constants';

function createApiURL(url: string) {
  return `${CONSTANTS.API_URL}${url.startsWith('/') ? url : '/' + url}`;
}

export async function apiGet(url: string) {
  const response = await fetch(createApiURL(url));

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return await response.json();
}
