function validateForm() {
  var fname = document.forms["reservation"]["txtfirtsname_ahmadfauzan"].value;
  var lname = document.forms["reservation"]["txtlastname_ahmadfauzan"].value;
  var email = document.forms["reservation"]["txtemail_ahmadfauzan"].value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (fname == "") {
    alert("Nama depan harus diisi");
    return false;
  }else if(lname == ""){
  	alert("Nama belakang harus diisi");
    return false;
  }else if(email == ''){
  	alert("Email harus diisi");
    return false;
  }

  if(!email.match(mailformat)){
  	alert("email tidak valid!");
	return false;
  }
}