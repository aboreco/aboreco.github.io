function registrar(){
	var email = document.getElementById('emailRegistro').value;
    var password = document.getElementById('passwordRegistro').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
        	// Handle Errors here.
          	var errorCode = error.code;
          	var errorMessage = error.message;
          	// ...
        });
}