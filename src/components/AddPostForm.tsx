import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks/hooks'
import { postAdded } from '../posts/postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useAppDispatch();


  const handleOnclick= () => {
    if (title && content) {
        dispatch(postAdded({
            id: nanoid(),
            title,
            content

        }))
        setTitle("")
        setContent("")
    }
  }


  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={handleOnclick}>Save Post</button>
      </form>
    </section>
  )
}
