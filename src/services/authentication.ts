import { useCallback } from 'react';
import useLocalStorage from 'services/storage';

export default function useAuthentication() {
  const { currentValue, setCurrentValue } = useLocalStorage('auth-token');

  const apiURL: string = 'apiUrl';

  const autenticate = useCallback(
    async (email: string, password: string) => {
      await fetch(`${apiURL}/sign_in`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ user: { email, password } }),
      })
        .then((response) => setCurrentValue(response))
        .catch((err) => console.error(err));
    },
    [setCurrentValue, apiURL],
  );
  return { token: currentValue, autenticate, isAuthenticated: !!currentValue };
}
