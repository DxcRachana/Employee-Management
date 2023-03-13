function myFunction1() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var filter = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var name = "^([A-Z][a-z]*)$";
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(email.match(filter)){
       if(password.match(pass)){
		   if(fname.match(name)){
			   if(lname.match(name)){
				   alert("Successfully... Registered :)");
				   document.getElementById('form').submit();
				   
			   }
               else if(lname==""){
                 alert("Please enter Last Name");
                 return;
               }
			   else{
				   alert("Last Name must conatin only alphabets and First letter should be UpperCase");
				   return;
			   }
            }
           else if(fname==""){
            alert("Please enter First Name");
            return;
          }
		   else{
			   alert("First Name must conatin only alphabets and First letter should be UpperCase");
			   return;
		   }
	   }
       else if(password==""){
        alert("Please enter Password");
        return;
      }
	   else{
		   alert("Password must contain 8 to 15 characters, at least one lowercase and uppercase letter, one numeric digit, and one special character.");
	   		return;
	   }
         
    }
    else if(email==""){
        alert("Please enter Email Address");
        return;
      }
    else{
		alert("Invalid Email address");
		return;
	}
    
 }