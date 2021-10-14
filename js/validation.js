// for first name

let fname = document.getElementById("fname");
fname.addEventListener("focusout", checkFname);
function checkFname() {
  if (fname.value == "") {
    document.getElementById("fnerror").innerHTML =
      "<span style='color:red';>first name should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (fname.value.length <= 2 || fname.value.length > 20) {
    document.getElementById("fnerror").innerHTML =
      "<span style='color:red';>lenght must be between 2 and 20</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (!isNaN(fname.value)) {
    document.getElementById("fnerror").innerHTML =
      "<span style='color:red';>only characters are allowed</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("fnerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// for last name

const lname = document.getElementById("lname");
lname.addEventListener("focusout", checkLname);
function checkLname() {
  if (lname.value == "") {
    document.getElementById("lnerror").innerHTML =
      "<span style='color:red';>last name should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (lname.value.length <= 2 || lname.value.length > 20) {
    document.getElementById("lnerror").innerHTML =
      "<span style='color:red';>lenght must be between 2 and 20</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (!isNaN(lname.value)) {
    document.getElementById("lnerror").innerHTML =
      "<span style='color:red';>only characters are allowed</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("lnerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// for mobile number

const mobno = document.getElementById("mobno");
mobno.addEventListener("focusout", checkMobNo);
function checkMobNo() {
  if (mobno.value == "") {
    document.getElementById("mobnoerror").innerHTML =
      "<span style='color:red';>mobile number should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (isNaN(mobno.value)) {
    document.getElementById("mobnoerror").innerHTML =
      "<span style='color:red';>only number are allowed</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (mobno.value.length != 10) {
    document.getElementById("mobnoerror").innerHTML =
      "<span style='color:red';>mobile number must be 10 digit</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("mobnoerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// for office mobile number

const offmobno = document.getElementById("offmobno");
offmobno.addEventListener("focusout", checkOffMobNo);
function checkOffMobNo() {
  if (offmobno.value == "") {
    document.getElementById("offmobnoerror").innerHTML =
      "<span style='color:red';>mobile number should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (isNaN(offmobno.value)) {
    document.getElementById("offmobnoerror").innerHTML =
      "<span style='color:red';>only number are allowed</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (offmobno.value.length != 10) {
    document.getElementById("offmobnoerror").innerHTML =
      "<span style='color:red';>mobile number must be 10 digit</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("offmobnoerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

//for password
const pwd = document.getElementById("pwd");
pwd.addEventListener("focusout", checkPwd);
function checkPwd() {
  if (pwd.value == "") {
    document.getElementById("pwderror").innerHTML =
      "<span style='color:red';>password should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (pwd.value.length < 8 || pwd.value.length > 12) {
    document.getElementById("pwderror").innerHTML =
      "<span style='color:red';>lenght must be between 8 and 12</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("pwderror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// confirm password

const cnfpwd = document.getElementById("cnfpwd");
cnfpwd.addEventListener("focusout", checkCnfPwd);
function checkCnfPwd() {
  if (cnfpwd.value == "") {
    document.getElementById("cnfpwderror").innerHTML =
      "<span style='color:red';>password should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (cnfpwd.value.length < 8 || cnfpwd.value.length > 12) {
    document.getElementById("cnfpwderror").innerHTML =
      "<span style='color:red';>lenght must be between 5 and 20</span>";
    $(this).css("border", "solid 2px red");
    return false;
    // match password
  } else if (pwd.value !== cnfpwd.value) {
    document.getElementById("cnfpwderror").innerHTML =
      "<span style='color:red';>password not matched</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("cnfpwderror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// for email

const emails = document.getElementById("emails");
emails.addEventListener("focusout", checkEmail);
function checkEmail() {
  if (emails.value == "") {
    document.getElementById("emailserror").innerHTML =
      "<span style='color:red';>email should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (emails.value.indexOf("@") <= 0) {
    document.getElementById("emailserror").innerHTML =
      "<span style='color:red';>@ invalid position</span>";
    $(this).css("border", "solid 2px red");
    return false;
    // match password
  } else if (
    emails.value.charAt(emails.value.length - 4) != "." &&
    emails.value.charAt(emails.value.length - 3) != "."
  ) {
    document.getElementById("emailserror").innerHTML =
      "<span style='color:red';>. invalid position</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("emailserror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}
// for year

var ddlYears = document.getElementById("year");

//Determine the Current Year.
var currentYear = new Date().getFullYear();

//Loop and add the Year values to DropDownList.
for (var i = 1950; i <= currentYear - 1; i++) {
  var option = document.createElement("OPTION");
  option.innerHTML = i;
  option.value = i;
  ddlYears.appendChild(option);
}

function checkage() {
  let valid = false;
  let x = document.getElementById("month").value.trim();
  let y = document.getElementById("day").value.trim();
  let z = document.getElementById("year").value.trim();
  let dob = new Date();
  dob.setMonth(x);
  dob.setDate(y);
  dob.setFullYear(z);
  let currentdate = new Date();
  document.getElementById("age").value =
    currentdate.getFullYear() - dob.getFullYear();
  let age = currentdate.getFullYear() - dob.getFullYear();
  if (isNaN(age)) {
    document.getElementById("ageerror").innerHTML =
      "<span style='color:red';>Please select gender</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (age <= 16) {
    document.getElementById("ageerror").innerHTML =
      "<span style='color:red';>age must be greater 16</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else if (age > 16) {
    document.getElementById("ageerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

// for gender
function checkGender() {
  var genders = document.getElementsByName("radio");
  if (genders[0].checked == true) {
    document.getElementById("gendererror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  } else if (genders[1].checked == true) {
    document.getElementById("gendererror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  } else {
    // no checked
    document.getElementById("gendererror").innerHTML =
      "<span style='color:red';>Please select gender</span>";
    $(this).css("border", "solid 2px red");
    return false;
  }
}

// for interest

function checkInterest() {
  var interest = document.getElementsByClassName("checkbox");
  if (interest[0].checked == true) {
    document.getElementById("interestrerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  } else if (interest[1].checked == true) {
    document.getElementById("interestrerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  } else if (interest[2].checked == true) {
    document.getElementById("interestrerror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  } else {
    // no checked
    document.getElementById("interestrerror").innerHTML =
      "<span style='color:red';>Please select Interest</span>";
    $(this).css("border", "solid 2px red");
    return false;
  }
}

//about
about = document.getElementById("about");
about.addEventListener("focusout", checkAbout);

function checkAbout() {
  if (about.value == "") {
    document.getElementById("abouterror").innerHTML =
      "<span style='color:red';>about should not be null</span>";
    $(this).css("border", "solid 2px red");
    return false;
  } else {
    document.getElementById("abouterror").innerHTML =
      "<span style='color:green';>valid</span>";
    $(this).css("border", "solid 2px green");
    return true;
  }
}

//on the time of submit

sub.addEventListener("click", (e) => {
  e.preventDefault();
  let fn = checkFname();
  let ln = checkLname();
  let mob = checkMobNo();
  let offmob = checkOffMobNo();
  let pass = checkPwd();
  let cnfpass = checkCnfPwd();
  let eml = checkEmail();
  let gen = checkGender();
  let int = checkInterest();
  let abt = checkAbout();
  let chkage = checkage();
  if (
    fn &&
    ln &&
    mob &&
    offmob &&
    pass &&
    cnfpass &&
    eml &&
    gen &&
    int &&
    abt &&
    chkage
  ) {
    alert("success");
  } else {
    alert("failed");
  }
});
