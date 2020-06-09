import React, { useEffect, useState } from "react";
import getPosts from "../services/Firebase/getPosts";
import Post from "../components/Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        {" "}
        {posts.map((post, key) => {
          return <Post key={key} details={post} />;
        })}
      </div>
    </div>
  );
};
export default PostList;
