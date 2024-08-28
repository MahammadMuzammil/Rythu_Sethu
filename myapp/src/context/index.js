import React from "react";
const CartContext=React.createContext({cartList:[],addCartItem:()=>{},removeItem:()=>{},products_list:[]})

export default CartContext