import React,{ useEffect } from 'react';
import getPosts from '../services/Firebase/getPosts';

const PostList = () => {
 
    useEffect( () => {
        const fetchPosts = async () => {
            const result = await getPosts();
            console.log(result)
        }
        fetchPosts();
    },[])

    return(
        <div>hell</div>
    )
}
export default PostList;