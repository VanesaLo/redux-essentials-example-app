import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post{
    id: string,
    title: string,
    content: string,
}


const initialState: Post[] = [{
    id: '1', 
    title:'First post',
    content: 'Hello'
}]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: (state, action: PayloadAction<Post>) => {
            state.push(action.payload)
        },
        postUpdate: (state, action: PayloadAction<Post>) => {
            const existingPost = state.find(post => post.id === action.type)
            if (existingPost) {
                existingPost.title = action.payload.title
                existingPost.content = action.payload.content
            }
        }

    }
})

export const {postAdded, postUpdate} = postsSlice.actions

export default postsSlice.reducer;
