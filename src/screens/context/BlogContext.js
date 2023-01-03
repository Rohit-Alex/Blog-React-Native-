// import React, { createContext, useReducer, useState } from 'react'
// const BlogContext = createContext()

import createDataContext from "./createDataContext"

// export default BlogContext

// const blogReducer = (state, action) => {
//     const {type, payload} = action
//     switch(type) {
//         case 'ADD_BLOG_POST': return [...state, { title: `Blog Post #${state.length + 1}` }]
//         default: return state
//     }
// }

// export const BlogProvider = ({children}) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

//     const addBlogPost = () => {
//         dispatch({ type: 'ADD_BLOG_POST'})
//     }

//     return <BlogContext.Provider value={{ blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
// }

const blogReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_BLOG_POST': return [...state, { title: `Blog Post #${state.length + 1}`, id: Math.floor(Math.random() * 99999) }]
        case 'DELETE_BLOG_POST': return state.filter(e => e.id !== payload)
        default: return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'ADD_BLOG_POST' })
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG_POST', payload:  id})
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])
