import { userRef } from "./index";

const editUserDetails = ({ uid, firstName, lastName }) => {
  userRef
    .child(uid)
    .set({
      firstName,
      lastName,
    })
};
export default editUserDetails;
