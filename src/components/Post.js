import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import DropDownMenu from "./DropDownMenu";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { userRef } from "../services/Firebase/index";

const useStyles = makeStyles({
  post: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5px",
  },
});

const Post = ({ details }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const menuConfig = {
    icon: <MoreVertIcon />,
    class: "link",
    items: [{ text: "Edit" }, { text: "Delete" }],
  };
  useEffect(() => {
    const getName = () => {
      userRef.child(details.author).once("value", (snapshot) => {
        setFirstName(snapshot.val().firstName);
        setLastName(snapshot.val().lastName);
      });
    };
  if(details && details.author) getName();
   
  },[]);

  return (
    <div className="outer">
      <div>
        <div className={classes.post}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar />
            <div className={classes.content}>
              <div>
                {firstName}
                <span> </span>
                {lastName}
              </div>
              <div style={{ color: "gray" }}>6 minutes ago</div>
            </div>
          </div>
          <DropDownMenu menuConfig={menuConfig} />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>{details?.content} </div>
    </div>
  );
};
export default Post;
