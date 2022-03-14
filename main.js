function passwordControl() {
  var pass = document.getElementById("password").value;
  var repass = document.getElementById("repassword").value;
  console.log(pass, repass);

  if (pass.lenght != 0) {
    if (pass == repass) {
      swal("Şifreler Doğru");
    } else {
      swal("Şifreler Eşleşmedi");
    }
  }
}
function showPass() {
  var x = document.getElementById("password");
  var y = document.getElementById("repassword");
  if (x.type === "password" || y.type === "repassword") {
    x.type = "text";
    y.type = "text1";
  } else {
    x.type = "password";
    y.type = "repassword";
  }
}
