document.getElementById("submit").onclick = function () {
  var userN = document.getElementById("userName").value;
  var emailN = document.getElementById("emai").value;
  var passwordN = document.getElementById("passw").value;
  console.log(userN);
  console.log(emailN);
  console.log(passwordN);
  let user = { user: userN, email: emailN, password: passwordN };
  console.log(user);
};
