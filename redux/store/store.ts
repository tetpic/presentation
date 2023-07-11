import { configureStore } from '@reduxjs/toolkit'
import blogReducer from "./blogSlice"
import createSagaMiddleware from "redux-saga";
import {watchSendBlog} from "../sagas/blogSaga";


const saga = createSagaMiddleware()

// let sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


export const store = configureStore({
  reducer: {
    blogs: blogReducer
  },
  middleware: [saga]
})


saga.run(()=> watchSendBlog(store));



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch