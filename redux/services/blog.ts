// // Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { BlogObject } from '../../components/blog/blogsObject'


// //
// // Define a service using a base URL and expected endpoints
// export const blogApi = createApi({
//   reducerPath: 'blogApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/blogs' }),
//   endpoints: (builder) => ({
//     getAllBlogs: builder.query<BlogObject, string>({
//       query: () => `/`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { usegetAllBlogsQuery } = blogApi