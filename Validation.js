function validation() {
    console.log("function calling");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    
    if (email == "" && password == "") {
        
        document.getElementById("labelforVal").innerHTML = "Enter Email and Password";
        console.log("Email and Password is Invalid");
    }
    else{
    document.getElementById("labelforVal").innerHTML = "login succesfully";
    console.log("login Succesfully");
    }
}

function registration() 
{
    console.log("function calling");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    if (firstName == "" ) {
        document.getElementById("labelforVal").innerHTML = "Enter Fist Name";
        console.log("Enter First Name");
    }
    else if (lastName == "") {
        document.getElementById("labelforVal").innerHTML = "Enter Last Name";
        console.log("Enter Last Name");
        
    }
    
    else if (email == "") {
        document.getElementById("labelforVal").innerHTML = "Enter Email";
        console.log("Email is Invalid");
    }
    
    else if (password == "") {
        document.getElementById("labelforVal").innerHTML = "Enter password";
        console.log("Password is Invalid");
    }
    
    else if (confirmPassword != password) {
        document.getElementById("labelforVal").innerHTML = "password is not same as confirm password";
        console.log("Confirm Password is not same as Password");
    }
    else{
        document.getElementById("labelforVal").innerHTML = "Registered Succesfully";

    }
}