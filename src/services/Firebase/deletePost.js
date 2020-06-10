import { postRef } from "./index";

const deletePost = (postKey) =>{
    postRef.child(postKey).remove().then(data => {
        console.log(data);
        return {message: "removed"}
    }).catch(error => {
        return {error: error.message}
    })
}
export default deletePost;