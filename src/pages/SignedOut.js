import React from 'react';
import { Auth } from 'aws-amplify';

const SignedOut = () => {
    const handleGoogleSignIn = () => {
        Auth.federatedSignIn({ provider: 'Google' });
    };

    return (
        <div>
            <h1>You have been signed out</h1>
            <p>To sign in with a different Google account, please log out of your current Google account first, then click the button below.</p>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default SignedOut;
