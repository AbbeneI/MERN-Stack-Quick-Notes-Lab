import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [userPref, setUserPref] = useState('signup');

  function handlePref() {
    if (userPref === 'signup') {
      setUserPref('login')
    }
    else {
      setUserPref('signup')
    }
  }

  return (
    <main className="auth-page">
      {/* <h1>AuthPage</h1> */}
      <div className="signup-illo"></div>
      <div className="auth-home flex-ctr">
        <button onClick={handlePref}>{userPref === 'signup' ? 'Welcome back:' : 'Create account:'}</button>
        {userPref === 'signup' ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}

      </div>

    </main>
  );
}