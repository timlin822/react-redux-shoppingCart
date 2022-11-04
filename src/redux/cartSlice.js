import {createSlice} from '@reduxjs/toolkit';

export const cartSlice=createSlice({
    name: "cart",
    initialState: {
        carts: JSON.parse(localStorage.getItem("carts")) || [],
        totalPrice: 0
    },
    reducers: {
        getPrice: (state)=>{
            state.totalPrice=state.carts.reduce((sum,item)=>sum+(item.price*item.quantity),0);
        },
        addCart: (state,action)=>{
            const existProduct=state.carts.find(cartItem=>cartItem.id===action.payload.id);
            if(existProduct){
                existProduct.quantity+=action.payload.quantity;
                state.carts=state.carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem);
            }
            else{
                state.carts.push(action.payload);
            }
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        increaseQuantity: (state,action)=>{
            const existProduct=state.carts.find(cartItem=>cartItem.id===action.payload);
            if(existProduct){
                existProduct.quantity+=1;
                state.carts=state.carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem);
            }
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        decreaseQuantity: (state,action)=>{
            const existProduct=state.carts.find(cartItem=>cartItem.id===action.payload);
            if(existProduct){
                existProduct.quantity-=1;
                if(existProduct.quantity<1){
                    existProduct.quantity=1;
                }
                state.carts=state.carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem);
            }
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        deleteCart: (state,action)=>{
            state.carts=state.carts.filter(cartItem=>cartItem.id!==action.payload);
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        clearCarts: (state)=>{
            state.carts=[];
            localStorage.removeItem("carts");
        }
    }
});

export const {getPrice,addCart,increaseQuantity,decreaseQuantity,deleteCart,clearCarts}=cartSlice.actions;

export default cartSlice.reducer;