import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";



const cartSlice = createSlice({
name:"Cart",
initialState:{
    cartItems:[]
},
reducers:{

    addCartItem:(state , action) =>{


        state.cartItems.push(action.payload.item)


}




}

})

export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer