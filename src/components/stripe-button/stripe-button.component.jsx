import React from 'react'
import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hf7pnLfAZFj57enhNM5Y3al1fjRLgWMWbVZ3yaPmRhs4vjVdc0zmrUARAVaDeDiRSi53ZYJMiEIjvvUDvSWbWWl00FjkauocE'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='COOL Clothing Co.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton