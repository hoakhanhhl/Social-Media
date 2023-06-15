import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const PostSide = (props) => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Posts postList = {props.postList}/>
    </div>
  )
}

export default PostSide