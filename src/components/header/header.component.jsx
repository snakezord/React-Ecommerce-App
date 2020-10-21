import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from '../../redux/cart/cart.selectors.js'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'


const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                currentUser ?
                (<div className='option' onClick={ () => auth.signOut() }>
                    SIGN OUT
                </div>)
                :
                (<Link className='option' to='/signin'>
                    SIGN IN
                </Link>)
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}


/*
 const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
}) 
SAME AS */

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);