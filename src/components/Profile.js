import React from "react";
import { Avatar, Divider, IconButton } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";

const Container = styled.div`
  margin-right: 5px;
  @media screen and (max-width: 600px) {
    margin: 0px;
  }
`;

const Profile = () => {
  return (
    <Container className="outer">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Avatar />
          <div style={{ marginLeft: 5 }}>Kacper Berg</div>
        </div>
        <IconButton>
          <EditIcon />
        </IconButton>
      </div>
      <Divider style={{ margin: "10px 0px" }} />
      <div>
        <h4 style={{ margin: "5px 0px" }}>About Me</h4>
        <div>kolorowy miś 2115</div>
      </div>
    </Container>
  );
};
export default Profile;
