var firebaseConfig = {
    apiKey: "AIzaSyBsejJyqB7ps3ar_On29_NFB_hKi2Xomto",
    authDomain: "code-bustersglau.firebaseapp.com",
    databaseURL: "https://code-bustersglau.firebaseio.com",
    projectId: "code-bustersglau",
    storageBucket: "code-bustersglau.appspot.com",
    messagingSenderId: "457756652899",
    appId: "1:457756652899:web:cc83b66869081907748f56",
    measurementId: "G-N92FT2C0FD"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href="admin.html";
    } 
    else {
        
    }
  });

function login(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : "+errorMessage);
      });
}