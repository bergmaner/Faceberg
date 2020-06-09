import React, { useEffect, useState } from "react";
import getPosts from "../services/Firebase/getPosts";
import Post from "../components/Post";
import { firebaseApp } from "../services/Firebase/index";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [UID, setUID] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const uid = firebaseApp.auth().currentUser.uid;
      const result = await getPosts();
      setUID(uid);
      setPosts(result);
    };
    fetchPosts();
  }, [getPosts()]);

  return (
    <div>
      <div>
        {posts.map((post, key) => {
          return <Post key={key} details={post} UID={UID} />;
        })}
      </div>
    </div>
  );
};
export default PostList;
