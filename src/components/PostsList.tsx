import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Link } from 'react-router-dom';



export const PostsList: React.FC = () => {
    const posts= useAppSelector(state => state.posts)

   const renderedPosts = posts.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
   ))

  return (
    <section className='post-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

