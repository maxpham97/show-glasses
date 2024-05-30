import React from 'react';
import { signInGoogle } from '../firebaseConfig';

const useAuth = () => {
  const [user, setUser] = React.useState<null | string>(null);

  const handleSignIn = async () => {
    try {
      const userName = await signInGoogle();
      if (userName) {
        setUser(userName);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return { user, handleSignIn };
};

export default useAuth;
