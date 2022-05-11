//function input(x,y){
  //  let x = document.getElementById("y").value;
//}
function validateForm(event){
    event.preventDefault();
const name = document.getElementById("Name").value;
const name_error = document.getElementById("Name_error");
if(!name){
    name_error.innerHTML="This field is require";
}
else{
    name_error.innerHTML="";
}
const number = document.getElementById("Number").value;
const number_error = document.getElementById("Number_error");
if(!number){
    number_error.innerHTML="This field is require";
}else{
    number_error.innerHTML=" ";
}
const message = document.getElementById("Message").value;
const message_error = document.getElementById("Message_error");
if(!message){
    message_error.innerHTML="This field is require";
}else{
    message_error.innerHTML=" ";
}
const email = document.getElementById("Email").value;
const email_error = document.getElementById("Email_error");
const email_error2 = document.getElementById("Email_error2");
if(!email){
    email_error.innerHTML="This field is require";
}else{
    email_error.innerHTML=" "; 
}
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
   if (!filter.test(email)) { 
    email_error2.innerHTML="Please enter a valid email address";
   }
   else{ 
    email_error2.innerHTML="";
   } 
}
//let x = document.getElementById("Submit").addEventListener("click", function(event){
 //   event.preventDefault();
//function assignValue(a,b,c){
   // let a = document.getElementById(b).value;
   // let c = document.getElementById(d);
//}

