import React from 'react'
import {getDatabase,ref,set} from "firebase/database";

import { app } from './firebase';

const db  = getDatabase(app);
const form = () => {
const putData = () => {
    set(ref(db,"users/cp"),{

        id:1,
        name:"Cp",
        age:21,
    }
    
    
    )
}


  return (
    <div>
      welcome to react firebase
      <button onClick={putData}>putData</button>
    </div>
  )
}

export default form
