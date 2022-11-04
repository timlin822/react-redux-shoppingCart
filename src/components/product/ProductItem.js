import {useDispatch} from 'react-redux';
import {addCart} from 'redux/cartSlice';

import './Product.css';

const ProductItem=({product})=>{
    const dispatch=useDispatch();

    const addCartHandler=(product)=>{
        const addCartProduct={
            id: product.id,
            title: product.title,
            images: product.images,
            price: product.price,
            quantity: 1
        };
        dispatch(addCart(addCartProduct));
    };

    return (
        <div className="product-item">
            <div className="product-image"><img src={product.images} alt="product" /></div>
            <div className="product-content">
                <div className="product-content-title">{product.title}</div>
                <div className="product-content-price">NT$ {product.price}元</div>
                <button className="btn-addCart" onClick={()=>addCartHandler(product)}>加入購物車</button>
            </div>
        </div>
    );
}

export default ProductItem;