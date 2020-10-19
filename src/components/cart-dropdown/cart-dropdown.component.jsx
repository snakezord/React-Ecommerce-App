import React from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({style}) => (
    <div className='cart-dropdown' style={style}>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown