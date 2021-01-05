import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
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

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }
        catch(error){
            console.log(error)
        }
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