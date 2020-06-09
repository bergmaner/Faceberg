import { firebaseApp, userRef } from "./index";

const signIn = ({ email, password }) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      userRef.child(data.user.uid).once("value", (snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      });
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export default signIn;
