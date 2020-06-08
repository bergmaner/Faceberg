import React from 'react';
import { Grid, Container } from '@material-ui/core';
import AddPost from '../components/AddPost';
import Post from '../components/Post';

const Feed = () => {
    return (
        <Container fixed style = {{ flexGrow: 1 }}>
         <Grid container >
            <Grid item xs = {12} sm = {4}>
            <div style= {{ background:'red' }}>Profiles</div>
            </Grid>
            <Grid item xs = {12} sm = {8}>
                <AddPost/>
                <Post/>
            </Grid>
         </Grid>
        </Container>
    )
}
export default Feed;