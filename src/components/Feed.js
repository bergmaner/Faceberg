import React from "react";
import { Grid, Container } from "@material-ui/core";
import AddPost from "../components/AddPost";
import Profile from "../components/Profile";
import PostList from "../components/PostList";

const Feed = () => {
  return (
    <Container fixed style={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={8}>
          <AddPost />
          <PostList />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Feed;
