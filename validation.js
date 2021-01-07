function validateForm() {
  var fname = document.forms["reservation"]["txtfirtsname_ahmadfauzan"].value;
  var lname = document.forms["reservation"]["txtlastname_ahmadfauzan"].value;
  var email = document.forms["reservation"]["txtemail_ahmadfauzan"].value;
  var pnumber = document.forms["reservation"]["txtphonenumber_ahmadfauzan"].value;
  var date = document.forms["reservation"]["txtdate_ahmadfauzan"].value;
  var many = document.forms["reservation"]["txtmanypeople_ahmadfauzan"].value;
  var formatemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var formatangka = /^[0-9]+$/;

  if (fname == "") {
    alert("Nama depan harus diisi");
    return false;
  } else if (lname == "") {
    alert("Nama belakang harus diisi");
    return false;
  } else if (email == '') {
    alert("Email harus diisi");
    return false;
  } else if (pnumber == '') {
    alert("Nomor handphone harus diisi");
    return false;
  } else if (date == '') {
    alert("Tanggal harus diisi");
    return false;
  } else if (many == '') {
    alert("Banyaknya orang dalam tour harus diisi");
    return false;
  }

  if (!email.match(formatemail)) {
    alert("email tidak valid!");
    return false;
  } else if (!pnumber.match(formatangka)) {
    alert("nomor handphone hanya boleh angka!");
    return false;
  } else if (!many.match(formatangka)) {
    alert("hanya boleh angka!");
    return false;
  }

}