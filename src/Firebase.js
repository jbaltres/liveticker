import firebase from "firebase";
import "firebase/firestore"

const config ={
    apiKey: "AIzaSyBNsdroW_TaroHhBBaQNITigo47Ks60c-w",
    authDomain: "eventlistener-7f8d2.firebaseapp.com",
    databaseURL: "https://eventlistener-7f8d2.firebaseio.com",
    projectId: "eventlistener-7f8d2",
    storageBucket: "eventlistener-7f8d2.appspot.com",
    messagingSenderId: "95597720703",
    appId: "1:95597720703:web:12b37a14e293122d1d7b4a"
}

firebase.initializeApp(config);

export default  firebase 

    

/*
Was eventuell noch gebraucht werden könnte:
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNsdroW_TaroHhBBaQNITigo47Ks60c-w",
    authDomain: "eventlistener-7f8d2.firebaseapp.com",
    databaseURL: "https://eventlistener-7f8d2.firebaseio.com",
    projectId: "eventlistener-7f8d2",
    storageBucket: "eventlistener-7f8d2.appspot.com",
    messagingSenderId: "95597720703",
    appId: "1:95597720703:web:12b37a14e293122d1d7b4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/
