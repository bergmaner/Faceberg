import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { firebaseApp } from "../services/Firebase/index";
import editUserDetails from "../services/Firebase/editUserDetails";

const EditUserDetails = ({ handleClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    const uid = firebaseApp.auth().currentUser.uid;
    const data = {
      uid,
      firstName,
      lastName,
    };
    editUserDetails(data);
  };

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        Go back
      </div>
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
