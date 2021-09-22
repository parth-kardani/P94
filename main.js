const firebaseConfig = {
    apiKey: "AIzaSyB6DHgJFLZzkDqUrY3Q50b0Tsu_scUrfLI",
    authDomain: "project93-13eb7.firebaseapp.com",
    databaseURL: "https://project93-13eb7-default-rtdb.firebaseio.com",
    projectId: "project93-13eb7",
    storageBucket: "project93-13eb7.appspot.com",
    messagingSenderId: "147552299778",
    appId: "1:147552299778:web:327e42aedb5b036153f01b",
    measurementId: "G-RGXDN98L1Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function adduser(){
      user_name=document.getElementById("user_name").value;
      console.log(user_name);
    firebase.database().ref("/").child(user_name).update({purpose:"adding_user"});
    }