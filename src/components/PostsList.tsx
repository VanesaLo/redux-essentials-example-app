import React from 'react';
import { useAppSelector } from '../hooks/hooks';



export const PostsList = () => {
    const posts= useAppSelector(state => state.posts)

   const renderedPosts = Object.keys(posts).map((post: any) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content}</p>
    </article>
   ))

  return (
    <section className='post-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

