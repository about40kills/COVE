import React, { useState, useEffect } from 'react';
import OnboardingScreen from './Onboarding';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import SignInScreen from './Signin';
import SignUpScreen from './Signup';
import TabLayout from './(nav)/_layout';
import UploadReelScreen from './UploadReel';

export default function App() {
  const [user, setUser] = useState<string | null>(null);
  const [authState, setAuthState] = useState<string | null>(null);

  useEffect(() => {
    const unSubscribedAuth = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email);
        setAuthState('authenticated');
      } else {
        setUser(null);
        setAuthState('onboarding');
      }
    });
    return unSubscribedAuth;
  }, [user, authState]);

  if (authState === null) return <OnboardingScreen setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'signin') return <SignInScreen setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'signup') return <SignUpScreen setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'authenticated' && user) return <TabLayout />;
  
  return <OnboardingScreen setAuthState={setAuthState} setUser={setUser} />;
}
