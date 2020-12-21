import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    // handleEmail = event => {
    //     this.setState({email: event.target.value})
    // }
    // handlePassword = event => {
    //     this.setState({password: event.target.value})
    // }

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({email:'', password:''})
    }
    render(){
        console.log(this.state.email)
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    label='Email'
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    />
                    <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    />
                    
                    <CustomButton type='submit'>
                        SIGN IN
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn