function myFunction() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var filter = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(email.match(filter)){
        if(password.match(pass)){
		  document.getElementById('loginForm').submit();
			
			}
    	
      else{
        alert("Invalid Credentials");
      return;
      }

    }
    else{
      alert("Invalid Credentials");
      return;
    }
    
 }