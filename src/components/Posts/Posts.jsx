import React from 'react'
import './Posts.css'
import Post from '../Post/Post'

const Posts = (props) => {
  const PostsData = props.postList;
  return (
    <div className="Posts">
      {PostsData.map((post,id)=>{
        return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts