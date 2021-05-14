import React from 'react';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

import './SignInSignUp.styles.scss';

const SignInSignUpPage = () => (
    <div className="SignInSignUpPage">
        <SignIn />
        <SignUp />
    </div>
);


export default SignInSignUpPage;

