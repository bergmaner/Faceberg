import { postRef } from './index';

const getPosts = async() => {
    let result = [];
     await postRef.once('value',snapshot =>{
            snapshot.forEach( post => {
                result.push({
                    ...post.val(),
                    postKey: post.key
                })
            })
        })
    return result;
}
export default getPosts;