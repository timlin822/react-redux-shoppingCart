import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {getPrice} from 'redux/cartSlice';

import CartItem from './CartItem';

import './Cart.css';

const CartBody=({submitHandler})=>{
    const dispatch=useDispatch();

    const {carts,totalPrice}=useSelector(state=>state.cart);

    useEffect(()=>{
        dispatch(getPrice());
    },[carts]);

    return (
        <>
            {carts && carts.map(cartItem=>(
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="cart-checkout">
                <div className="underline"></div>
                <div className="cart-checkout-flex">
                    <div>總計</div>
                    <div className="cart-checkout-price">NT$ {totalPrice}元</div>
                </div>
                <button className="btn-order" onClick={submitHandler}>送單</button>
            </div>
        </>
    );
}

export default CartBody;