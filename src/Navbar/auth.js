
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";
import Signup from "./signup";

const auth = getAuth(app);

const authpage = () => {
  
    const signupUser = () => {
 createUserWithEmailAndPassword(
auth,
"cpyadavishal@gmail.com",
"Cpthegreat"
).then((value) => console.log(value));

 
 };
    return (
    <div>
<Signup />
    </div>
  )
}

export default authpage;

