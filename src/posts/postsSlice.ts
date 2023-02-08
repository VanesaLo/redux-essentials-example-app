import {createSlice } from '@reduxjs/toolkit';

export interface Post {
    id: number,
    title?: string,
    content?: string,
}


const initialState = {
    id: 1, 
    title:'First post',
    content: 'Hello'
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer;
