import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        title: "First post",
        author: "NNT"
    },
    {
        id: nanoid(),
        title: "Second post",
        author: "NVK"
    }
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (post) => {
                return {
                    payload: {
                        id: nanoid(),
                        title: post.title,
                        author: post.author
                    }
                }
            }
        }
    }
})

export const postSelector = state => state.post;

export const {addPost} = postSlice.actions;

export default postSlice.reducer;