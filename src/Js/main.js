const toggleMode=document.getElementById("toggleMode")
if(localStorage.getItem("theme")==="dark"){
    document.documentElement.classList.toggle("dark");
} else if(localStorage.getItem("theme")==="light"){
    document.documentElement.classList.toggle("light");
}
toggleMode.addEventListener("click",function(){
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
})
const btnMonthly=document.getElementById("monthly")
const btnYearly=document.getElementById("yearly")

btnYearly.addEventListener("click",function(e){
        btnMonthly.classList.remove("text-gray-200")
        btnMonthly.classList.remove("bg-blue-700")
        btnYearly.classList.remove("text-gray-900")
        btnMonthly.classList.add("text-gray-900")
        btnYearly.classList.add("bg-blue-700")
        btnYearly.classList.add("text-gray-200")
})
btnMonthly.addEventListener("click",function(e){
    btnYearly.classList.remove("text-gray-200")
    btnYearly.classList.remove("bg-blue-700")
    btnMonthly.classList.remove("text-gray-900")
    btnYearly.classList.add("text-gray-900")
    btnMonthly.classList.add("bg-blue-700")
    btnMonthly.classList.add("text-gray-200")
})
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //Get input value
  let firstName = document.getElementById("name1").value.trim();
  let lastName = document.getElementById("name2").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone =document.getElementById("phone").value.trim(); 
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  //Get errors
  let nameError = document.getElementById("name-error");
  let phoneError = document.getElementById("phone-error");
  let emailError = document.getElementById("email-error");
  let subjectError = document.getElementById("subject-error");
  let messageError = document.getElementById("message-error");
  //clear form
  let valid = true;
  console.log(typeof(phone));
  
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  phoneError.textContent = "";
  //Form validition
  //Name validition
  if (nameError.length>0||phoneError.length>0||messageError.length>0||subjectError.length>0||emailError.length>0) {
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
  }
  if (firstName === "" || lastName === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    } else if (firstName.length < 3 || firstName.length > 15 || lastName.length < 3 || lastName.length > 15) {
        nameError.textContent = "The name must be between 3-15 characters.";
        valid = false;
    }
    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        valid = false;
    } else if (phone.length!==11 || isNaN(phone)) {
        phoneError.textContent = "The phone number must be 11 numbers.";
        valid = false;
    }
    //Email validition
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }
    //Subject validition
    if (subject !== "" && subject.length < 3) {
        subjectError.textContent = "The subject must be at least 3 characters.";
        valid = false;
    }
    //Message validition
  if (message !== "" && message.length < 5) {
    messageError.textContent = "The message must be at least 5 characters.";
    valid = false;
}
if (valid) {
    alert("Form submitted successfully.");
}
this.reset()
});
