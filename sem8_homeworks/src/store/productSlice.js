import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (productId, thunkApi) => {
        try {
            const response = await fetch('/products.json')
            if (!response.ok) {
                throw new Error('Возникла проблема при обращении к базе')
            } else {
                let result = await response.json()
                if (productId != null && +productId && productId >= 0) {
                    result = result.filter(product => product.id === +productId)
                    if (result.length === 0) {
                        throw new Error('Продукт не найден')
                    } else {
                        result = [result[0]]
                    }
                }
                return result
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const initialState = {
    cart: JSON.parse(localStorage.getItem('shopCart')) || [],
    products: [],
    curProduct: null,
    error: null,
    loading: false
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.filter(product => product.id === action.payload.id).length > 0) {
                state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        product.quantity = +product.quantity + 1
                    }
                    return product
                })
            } else {
                state.cart = [
                    ...state.cart,
                    {
                        ...action.payload,
                        size: action.payload.availableSize[0],
                        color: 'red',
                        quantity: 1
                    }
                ]
            }
            localStorage.setItem('shopCart', JSON.stringify(state.cart))
            return state
        },
        changeQuantity: (state, action) => {
            if (action.payload.quantity !== '') {
                state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        product.quantity = action.payload.quantity
                    }
                })
            }
        },
        removeProductFromCart: (state, action) => {
            state.cart = [...state.cart.filter(product => product.id != action.payload)]
            localStorage.setItem('shopCart', JSON.stringify(state.cart))
        },
        clearCart: (state) => {
            state.cart = []
            localStorage.setItem('shopCart', JSON.stringify([]))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                if (action.payload.length === 1) {
                    state.curProduct = action.payload[0]
                } else {
                    state.products = action.payload
                }
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || action.error
            })
    }
})

export const { fetchProductsRequest, fetchProductsFailure, fetchProductsSuccess, addToCart,
    changeQuantity, removeProductFromCart, clearCart
} = productSlice.actions

export default productSlice.reducer