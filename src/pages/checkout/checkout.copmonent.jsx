import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'
import { createStructuredSelector } from "reselect";


import {connect} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage =({cartItems, totalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem => <CheckOutItem id={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className="total">
            <span>Total: ${totalPrice}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for the payments*
            <br/>
            4242 4242 4242 4242 - Exp: 11/21 -CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal,
    
})

export default connect(mapStateToProps, null)(CheckOutPage)