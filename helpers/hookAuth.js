// hooks/useAuth.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { clearToken } from 'helpers/localStorageHelper.js';
import { post } from 'helpers/resApiRequestor.js';

function verifyTokenApi(payload) {
    try {
      const decoded = post('users/validate/token', payload);
      console.log('[CUSTOM_HOOK]: CHECK RESPONSE', decoded);

      return true;
    } catch (error) {
      alert('EXPIRED TOKEN!');
      console.error('[CUSTOM_HOOK]: Token is invalid or expired!', error);
      clearToken;
      return false;
    }
}

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('idToken');
    console.log('[CUSTOM_HOOK]: CHECK TOKEN', token)

    if (token) {
      console.log('[CUSTOM_HOOK]: WITH TOKEN')
      const result = verifyTokenApi({token});
      console.log('[CUSTOM_HOOK]: CHECK VERIFY TOKEN RESULT', result)

      if (!result) {
        console.log('[CUSTOM_HOOK]: INVALID TOKEN')
        router.push('/signin');
      }
    } else {
      console.log('[CUSTOM_HOOK]: WITHOUT TOKEN')
      router.push('/signin');
    }
  }, [router]);
};

export default useAuth;
