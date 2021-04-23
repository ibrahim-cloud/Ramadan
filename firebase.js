
import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyB64sX2DV2kgQeS_CXf4EcnLaeIWCrlkQk",
    authDomain: "ramdan-2f8ff.firebaseapp.com",
    projectId: "ramdan-2f8ff",
    storageBucket: "ramdan-2f8ff.appspot.com",
    messagingSenderId: "268029051758",
    appId: "1:268029051758:web:9e05674597a4957e1eb77f",
    measurementId: "G-MX6R1D6HW5"
  };
      // Initialize Firebase
      if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

  export default firebase