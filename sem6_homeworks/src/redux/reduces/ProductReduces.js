import { createSlice } from '@reduxjs/toolkit'

const initialState = await fetch('./product.json')
    .then(res => res.json())

const ProductReduces = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => [...state, {
            id: Date.now(),
            name: action.payload.name,
            desc: action.payload.desc,
            price: action.payload.price,
            available: action.payload.available
        }],
        removeProduct: (state, action) => { return state.filter(product => product.id !== action.payload) },
        updateProduct: (state, action) => {state.map(product => {
            if (product.id === action.payload.id) {
                product.name = action.payload.name
                product.desc = action.payload.desc
                product.price = action.payload.price
                product.available = action.payload.available
            }
            return product
        })}

    }
});


export const { addProduct, removeProduct, updateProduct } = ProductReduces.actions

export default ProductReduces.reducer