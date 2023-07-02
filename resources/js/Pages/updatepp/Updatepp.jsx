import React, {useContext} from 'react'
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext'
import { db , app} from "../../firebase";

const Updatepp = (props) => {
    console.log(props.props.auth.user.avatar)
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
//     const docRef = doc(db, "users", currentUser.uid);
//     const data = {
//         photoUrl: props.props.auth.user.avatar
//     };
//     setDoc(docRef, data).then(docRef => {
//     console.log("Entire Document has been updated successfully");
// })
// .catch(error => {
//     console.log(error);
// })
  return (
    <div>Updatepp</div>
  )
}

export default Updatepp