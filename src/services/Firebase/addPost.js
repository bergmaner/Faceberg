import { postRef } from "../Firebase/index";

const addPost = (uid, content) => {
  postRef.push({
    author: uid,
    content,
    date: new Date().toLocaleString(),
  });
};
export default addPost;
