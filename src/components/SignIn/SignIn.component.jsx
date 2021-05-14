import React from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


import './SignIn.styles.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});

        } catch (error){
            console.log(error);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="SignIn">
                
                <h2 className="title">I already have an account</h2>

                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        label="Password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className="button-container">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}

export default SignIn;