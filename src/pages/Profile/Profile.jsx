import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
import { createPost, getPostsByUserId } from '../../services/PostAPI'
const Profile = () => {
  const [postList, setPostList] = React.useState([]);
  React.useEffect(()=>{
    async function testAddData(){
      return console.log(await createPost({user_id: "123", content: "test cai xem ntn", imageUrl: "https://visanuocngoai.vn/wp-content/uploads/2022/03/shogun-la-gi-5.jpg", like_list: [] }));
    }
    // testAddData();
    async function testGetData(){
      setPostList(await getPostsByUserId("123"));
    }
    testGetData();
  }, []);

  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide postList={postList? postList : []}/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile