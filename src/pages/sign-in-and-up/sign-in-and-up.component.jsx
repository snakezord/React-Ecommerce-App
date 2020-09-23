import React from 'react'
import './sign-in-and-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'

const SignInAndUp = () => {
    return (
        <div className='sign-in-and-up'>
            <SignIn className='sign-in' />
        </div>
    )
}

export default SignInAndUp;