import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { firebaseApp, postRef } from "../services/Firebase/index";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [UID, setUID] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      postRef.once("value", (snapshot) => {
        let result = [];
        snapshot.forEach((post) => {
          result.push({
            ...post.val(),
            postKey: post.key,
          });
        });
        const uid = firebaseApp.auth().currentUser.uid;
        setPosts(result.reverse());
        setUID(uid);
      });
    };
    getPosts();
  }, [posts]);

  return (
    <div>
      <div>
        {posts.map((post, key) => (
          <Post key={key} details={post} UID={UID} />
        ))}
      </div>
    </div>
  );
};
export default PostList;
