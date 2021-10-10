import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import CustomButtom from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
       
        <CustomButtom>Go To Checkout</CustomButtom>
    </div>
)
const mapStateToProps = (status) => ({
    cartItems : selectCartItems(status)
})

export default connect(mapStateToProps)(CartDropdown);