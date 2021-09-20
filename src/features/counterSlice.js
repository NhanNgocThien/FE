import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        increaseByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

//Action creators are generated for each case of reducer function 

export const {increment, decrement, increaseByAmount} = counterSlice.actions;

export const selectCount =  state => state.counter.value;

export default counterSlice.reducer;