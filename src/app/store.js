import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../features/postSlice';
import counterReducer from '../features/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
    },
})