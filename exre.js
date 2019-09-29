document.getElementById("parfooter").addEventListener('click',function show(){
    document.getElementById("parfooter").style.display="none";
    document.getElementById("img2").style.visibility="visible";
 });
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 document.getElementById("sign").addEventListener('click', function () {
    var name = document.getElementById("name").value;
    nameValid(name);
    var email = document.getElementById("email").value;
    mailValid(email);
    var pass = document.getElementById("pass").value;
    passValid(pass);
 });
 //  Name
 function nameValid(name) {
    console.log(name);
    let pattname = /(\w+) (\w+) (\w+)/;
    if (name === "") {
        text = ("Your name must not be empty");
    } else if (!name.match(pattname)) {
        text = ("enter first and last name");
    } else {
        //text = "";
        return true;
    }
    document.getElementById("text_error").innerHTML = text;
 }
 // Email
 function mailValid(email) {
    console.log(email);
    let pattmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email === "") {
        text = ("Your email must not be empty");
    } else if (!email.match(pattmail)) {
        text = ("Unvalid email");
    } else {
         //text = "";
       return true;
    }
    document.getElementById("email_error").innerHTML = text;
 }
 //  Password
 function passValid(pass) {
    console.log(pass);
    let pattpass = /\w+\d+[!@#\$%\^&]+/;
    if (pass === "") {
        text = ("Password must not be empty");
    }
    // else if(pass.length < 8){
    //     text = ("Password must not be 8 characters ");
    // }
    else if (!pass.match(pattpass)) {
        text = ("Password must has at least one of the following: [!, @, #, $, %, &, *]");
    } else {
        // text = "";
        return true;
    }
    document.getElementById("pass_error").innerHTML = text;
 }
 
 
 