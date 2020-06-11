import { userRef } from "./index";

const editUserDetails = ({ uid, firstName, lastName, imageURL }) => {
  userRef
    .child(uid)
    .update({
      firstName,
      lastName,
      imageURL: imageURL ? imageURL : ""
    })
};
export default editUserDetails;
