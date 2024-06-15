/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { BasketReducerType, IBasketAction } from '../reduser-types';
import REDUX_SLICE_NAMES from '../../consts/redax-slice-names';
import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store';
import { IProduct } from '../../components/ContentCard';

const initialState: BasketReducerType = {
    basketProducts: [],
};

const basketSlice = createSlice({
    initialState,
    name: REDUX_SLICE_NAMES.BASKET_STATE,
    reducers: {
        addToBasket: (state, action: IBasketAction) => {
            const existingProduct = state.basketProducts.find((item) => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
            } else {
                state.basketProducts.push({ ...action.payload, quantity: 1 });
            }
        },
        minusFromBasket: (state, action: IBasketAction) => {
            const existingProduct = state.basketProducts.find((item) => item.id === action.payload.id);
            if (existingProduct && existingProduct.quantity) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else if (existingProduct.quantity === 1) {
                    state.basketProducts = state.basketProducts.filter((item) => item.id !== action.payload.id);
                }
            }
        },
        resetBasket: (state) => {
            state.basketProducts = [];
        },
    },
});

const { addToBasket, resetBasket, minusFromBasket } = basketSlice.actions;

export const useGetBasketState = () => useAppSelector((state: RootState) => state[basketSlice.name] as BasketReducerType);

export const useSetBasketState = () => {
    const dispatch = useAppDispatch();

    return {
        addToBasket: (fields: IProduct) => {
            dispatch(addToBasket(fields as any));
        },
        minusFromBasket: (fields: IProduct) => {
            dispatch(minusFromBasket(fields as any));
        },
        resetBasket: () => dispatch(resetBasket()),
    };
};

export default basketSlice;
