import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartItems: [],
   quantity: 0,
   total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add:(state, action) =>{
            state.quantity = state.quantity + 1;
            const cartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id)
            if(cartItem){
                cartItem.quantity = cartItem.quantity + 1
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
            // cartItem ? (cartItem.quantity = cartItem.quantity + 1) : state.cartItems.push({ ...action.payload, quantity: 1 });
        },
        increment: (state, action) =>{
            state.quantity = state.quantity + 1;
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            state.cartItems[itemIndex].quantity +=1
            let total = 0
            total = state.cartItems[itemIndex].quantity * state.cartItems.price
        },
        decrement: (state, action) =>{
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            state.cartItems[itemIndex].quantity > 1 && state.cartItems[itemIndex].quantity-- && state.quantity--;
        },
        remove: (state, action) => {
            state.cartItems.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                state.cartItems = state.cartItems.filter(
                  (item) => item.id !== cartItem.id
                );
                state.quantity = state.quantity - cartItem.quantity;
              }
            });
        },
        total: (state) => {
            let total = 0;
            state.cartItems.forEach((cartItem) => {
              total += cartItem.quantity * cartItem.price;
            });
            state.total = total;
        },
        clear: (state) => {
            state.cartItems = [];
            state.quantity = 0;
          },

    }
})

export const { add, increment, decrement, total, remove, clear } = cartSlice.actions

export default cartSlice.reducer