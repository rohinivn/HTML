function Validation() {
    if (status)
        alert("Payment Successfull!!");
    else
        alert("Payment not successfull");
}
var status = true;
function SecurityCodeValidation() {
    //securitycode validation
    var pattern = /^[0-9]+$/;
    var securityCode = document.getElementById("Security").value;
    
    if(!pattern.test(securityCode) ) {
        ErrorSecurityCode.innerHTML = "Please Enter Valid Security Code";
    } 
    else {
        ErrorSecurityCode.innerHTML = "";   
    }
}
function EmailValidation() {
    //Email Validation
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email").value;
    if(!pattern.test(email)) {
        document.getElementById("errorEmail").innerHTML = "Please Enter valid MailId";
    }
    else {                     
        document.getElementById("email").innerHTML = "";
    }
}
//Card Holder Name
function CardHolderNameValidation() {

    var pattern = /^[A-Za-z]+$/;
    var name = document.getElementById("Cardholdername").value;
    if (!pattern.test(name)) {
        document.getElementById("errorHolderName").innerHTML = "Please Enter Valid Name";
        status = false;
    }
    else {
        document.getElementById("errorHolderName").innerHTML = "";
    }
}

function TownValidation() {
    var towm = document.getElementById('Town').value;
    var townPattern = /^[a-zA-Z ]{2,30}$/;

    if (!townPattern.test(town)) {
        document.getElementById('errorTown').innerHTML = "*Please enter  Town/City";
        status = false;
    }
    else {
        document.getElementById('errorTown').innerHTML = "";
    }
}