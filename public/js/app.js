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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth.Auth.Persistence.LOCAL;

    $('#btn-login').click(function(){
        
        var email=$("#email").val();
        var password=$("#password").val();

        var result=firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });

    });