import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { postUpdate } from '../posts/postsSlice'
import { RouteComponentProps } from 'react-router';


type MatchParams={
    postId: string,
}
type DetailMatch= RouteComponentProps<MatchParams>;


export const EditPostForm: React.FC<DetailMatch> = ({match}) => {
  const {postId} = match.params
  
  const post = useAppSelector(state => state.posts.find(post => post.id === postId))
  
const [title, setTitle] = useState(post?.title)
const [content, setContent] = useState(post?.content)

const dispatch = useAppDispatch()
const history = useHistory()

const handleOnClick = () => {
    if(title && content){
        dispatch(postUpdate({id: postId, title, content}))
        history.push(`/post/${postId}`)
    }
}

    return (
    <section>
    <h2>Edit Post</h2>
    <form>
      <label htmlFor="postTitle">Post Title:</label>
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        placeholder="What's on your mind?"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </form>
    <button type="button" onClick={handleOnClick}>
      Save Post
    </button>
  </section>
  )
}
