// var list = ["Name" , "Age" , "Email" ]

var list = document.getElementById('result', 'result1', 'result2', 'result3');

function dltall() {
    result.innerHTML = "";
    result1.innerHTML = "";
    result2.innerHTML = "";
    result3.innerHTML = "";
    age.innerHTML = "";
}
function clr(){
let input1 = document.getElementById('age', 'email');
input1.value = "";
identity.value = "";
email.value = "";
contact.value = "";
}

function submit(){
    var name = document.getElementById("identity").value
    localStorage.setItem("name", name);
    var age = document.getElementById("age").value
    localStorage.setItem("age", age);
    var email = document.getElementById("email").value
    localStorage.setItem("email", email);
    var contact = document.getElementById("contact").value
    localStorage.setItem("contact", contact);

    var result = document.getElementById("result")
    var resultFinal = localStorage.getItem("name");
    result.innerHTML=resultFinal;

    var result = document.getElementById("result1")
    var resultFinal1 = localStorage.getItem("age");
    result.innerHTML=resultFinal1;

    var result = document.getElementById("result2")
    var resultFinal2 = localStorage.getItem("email");
    result.innerHTML=resultFinal2;
    
    var result = document.getElementById("result3")
    var resultFinal3 = localStorage.getItem("contact");
    result.innerHTML=resultFinal3;
}

// let itemsArray = [name];

// function del(){
//     localStorage.clear();
//     ul.innerHTML = '';
//     itemsArray = [];
//   }

function del() {
    var totalAmount = document.getElementById('result3');
    var expenses = JSON.parse(localStorage.clear('contact')) || [];
  
    var total = expenses.reduce(function(acc, expense) {
      return acc + expense.amount;
    }, 0);
  
    totalAmount.textContent = 'Total : ' + total.toFixed(2) + ' PKR';
  }


  