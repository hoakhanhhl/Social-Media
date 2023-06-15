import { firestore } from "../config/firebase"


export async function createPost(postData) {
  const data = await firestore.collection("posts").add(postData);
  const id = data.id;
  return await firestore.collection("posts").doc(id).update({...postData, id });
}

export async function getPostsByUserId(userId){
  const data = await firestore.collection("posts").where("user_id", "==", userId).get();
  console.log( data.docs.map((item)=> ({...item.data()})))
  return data.docs.map((item)=> ({...item.data()}));
}

export async function getAllPosts(){
  const data = await firestore.collection("posts").get();
  console.log( data.docs.map((item)=> ({...item.data()})))
  return data.docs.map((item)=> ({...item.data()}));
}