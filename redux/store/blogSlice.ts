import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BlogObject } from '../../components/blog/blogsObject'


interface BlogState {
    blogs: BlogObject[],
    title: string,
    body: string,
    isFetching: boolean,
    sending: boolean,
    error: string,

}


const initialState:BlogState  = {
  blogs: [],
  title: "test",
  body: "test body",
  isFetching: false,
  sending: false,
  error: ""
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
    sendBlog: (state) => {
      state.sending = true
    },
    isBlogSended: (state, action: PayloadAction<string>) => {
      state.sending = false
      state.error = action.payload
    }
  },

})

// Action creators are generated for each case reducer function
export const { setBlogs, setTitle, setBody, sendBlog, isBlogSended } = blogSlice.actions

export default blogSlice.reducer