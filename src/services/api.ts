import { useCallback, useMemo } from 'react';
import Axios from 'axios';

import useAuthentication from './authentication';

export function useBackend() {
  const { token } = useAuthentication();
  const apiURL: string = 'apiurl';

  const headers = useMemo(
    () =>
      new Headers({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    [token],
  );

  const get = useCallback(
    async (location: string) => {
      const response = await fetch(apiEndpoint(location, apiURL), {
        method: 'GET',
        headers,
      });
      return response.json();
    },
    [headers, apiURL],
  );

  const post = useCallback(
    async (location, body) => {
      const response = await fetch(apiEndpoint(location, apiURL), {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      return response.json();
    },
    [headers, apiURL],
  );

  const api = useMemo(
    () =>
      Axios.create({
        baseURL: apiURL,
        headers: {
          Authorization: `bearer ${token}`,
        },
      }),
    [token, apiURL],
  );

  return { get, post, api };
}

function apiEndpoint(location: string, apiURL: string) {
  return `${apiURL}/${location}`;
}
