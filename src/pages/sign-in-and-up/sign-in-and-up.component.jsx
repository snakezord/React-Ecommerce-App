import React from 'react'
import './sign-in-and-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndUp = () => {
    return (
        <div className='sign-in-and-up'>
            <SignIn className='sign-in' />
            <SignUp className='sign-up' />
        </div>
    )
}

export default SignInAndUp;