import { postRef } from "../Firebase/index";

const addPost = (uid, content) => {
  postRef.push({
    author: uid,
    content,
    date: Date.now()
  });
};
export default addPost;
