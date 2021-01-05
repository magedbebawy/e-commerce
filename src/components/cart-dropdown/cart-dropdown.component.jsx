import './cart-dropdown.styles.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from "react-redux";
import CartItem from '../cart-items/cart-items.component';

import { withRouter } from "react-router-dom";

const CartDropdown =({cartItems, history})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(
                    cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                )
            }
        </div>
        <CustomButton onClick={
            () => {history.push('/checkout')}
        }>
            GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown))