import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const ProductReduce = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => [...state, {
            id: Date.now(),
            name: action.payload.name,
            desc: action.payload.desc,
            price: action.payload.price,
            available: true
        }],
        editProduct: (state, action) => state.map(product => {
            if (product.id === action.payload.id) {
                product.name = action.payload.name
                product.desc = action.payload.desc
                product.price = action.payload.price
            }
            return product
        }),
        removeProduct: (state, action) => { return state.filter(product => product.id !== action.payload) },
        allProduct: (state) => state
    }
});

export const { addProduct, editProduct, removeProduct, allProduct } = ProductReduce.actions

export default ProductReduce.reducer