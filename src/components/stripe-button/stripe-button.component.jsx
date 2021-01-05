import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I3l2qKiUgwRfQ9ZestRLjI27te1xxJpdbbPaOev6nYKaXRxhp11yC2LvwZCz7PKAsykX75GTNHfbYfeRlt8LeOj009uLScpqz'
    const onToken = token => {
        alert('Payment successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Ecpmerce Pvt Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price} `}
        amount= {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton