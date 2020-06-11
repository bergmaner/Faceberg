import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { firebaseApp, storageRef } from "../services/Firebase/index";
import editUserDetails from "../services/Firebase/editUserDetails";

const EditUserDetails = ({ handleClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const uid = firebaseApp.auth().currentUser.uid;
  if(image){
    const upload = storageRef.ref(`images/${image.name}`).put(image);
    upload.on("state_changed",() =>{
    },(error)=>{
      console.log(error);
    },()=>{
      upload.snapshot.ref.getDownloadURL().then(function(imageURL){
        console.log("imageURL",imageURL);
        const data = {
          uid,
          firstName,
          lastName,
          imageURL
        };
        editUserDetails(data);
      })
    })
  }else{
    console.log("XDD");
    const data = {
      uid,
      firstName,
      lastName
    };
    editUserDetails(data);
  }
    
    handleClick();
  };

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        Go back
      </div>
      {image && <img src = {URL.createObjectURL(image)} height = "40px" alt = "profile picture"/>}
      <Input type = "file" onChange = { (e) => setImage(e.target.files[0]) }/>
      <Input
        style={{ margin: "5px 0px" }}
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="FirstName"
      />
      <Input
        style={{ margin: "5px 0px" }}
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="LastName"
      />
      <Button
        style={{ margin: "5px 0px" }}
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
export default EditUserDetails;
