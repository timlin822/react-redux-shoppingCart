import {useSelector,useDispatch} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {clearCarts} from 'redux/cartSlice';

import CartBody from './CartBody';

import './Cart.css';

const Cart=()=>{
    const dispatch=useDispatch();

    const {carts}=useSelector(state=>state.cart);
    
    const submitHandler=()=>{
        toast.success("call api",{position: toast.POSITION.TOP_CENTER,autoClose: 2000});
        dispatch(clearCarts());
    };

    return (
        <div className="cart">
            <h2 className="cart-title">購物車</h2>
            {carts.length>0?<CartBody submitHandler={submitHandler} />:<h1 className="cart-empty">歡迎選購</h1>}
            <ToastContainer />
        </div>
    );
}

export default Cart;