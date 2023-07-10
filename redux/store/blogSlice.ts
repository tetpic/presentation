import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BlogObject } from '../../components/blog/blogsObject'


interface BlogState {
    blogs: BlogObject[],
    title: string,
    body: string,
    isFetching: boolean
}


const initialState:BlogState  = {
  blogs: [],
  title: "test",
  body: "test body",
  isFetching: false
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<BlogObject[]>) => {
        state.blogs = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBlogs, setTitle, setBody } = blogSlice.actions

export default blogSlice.reducer