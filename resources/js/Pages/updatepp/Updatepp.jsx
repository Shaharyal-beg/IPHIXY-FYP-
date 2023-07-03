import React, {useContext} from 'react'
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext'
import { db , app} from "../../firebase";
import { auth } from "../../firebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const Updatepp = (props) => {
 
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.uid);
    function update(){
      const docRef = doc(db, "users", auth.lastNotifiedUid);
    const data = {
      photoURL: props.props.auth.user.avatar
    };
    updateDoc(docRef, data)
    .then(docRef => {
      updateProfile(auth.currentUser, data)
      .then(docRef => {
          console.log("A New Document Field has been added to an existing document");
          window.location.replace('/dashboard');
      })
      .catch(error => {
          console.log(error);
          window.location.replace('/dashboard');
      })
    })
    .catch(error => {
        console.log(error);
    })
    
  }
  update()
    

  return (
    <div></div>
  )
}

export default Updatepp