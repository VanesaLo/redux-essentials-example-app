import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'

type Props = {
  match: any
}

export const SinglePostPage: React.FC<Props> = ({ match }) => {
  const { postId } = match.params

  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
