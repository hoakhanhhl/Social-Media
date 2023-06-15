import React from "react"
import './Home.css'
import ProfileSide from "../../components/profileSide/ProfileSide"
import PostSide from "../../components/PostSide/PostSide"
import RightSide from "../../components/RightSide/RightSide"
import { getAllPosts } from "../../services/PostAPI"
const Home = () =>{
  const [postList, setPostList] = React.useState([]);
  React.useEffect(()=>{
    async function getPostList() {
      setPostList(await getAllPosts());
    }
    getPostList();
  },[])
  return (
      <div className="Home">
        <ProfileSide/>
        <PostSide postList={postList}/>
        <RightSide/>
      </div>
  )
}

export default Home