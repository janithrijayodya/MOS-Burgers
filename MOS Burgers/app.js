let userName =  document.getElementById("userName");
let password = document.getElementById("password");
let cashierShow = document.getElementById("cashierUserNameBar");

let btnSign = document.getElementById("btnSign");

let name;
let pswrd;


function signin(){

    name= userName.value; 
    pswrd = password.value;
    
    if(name.charAt(0)=="C" || name.charAt(0)=="c"){
        // console.log("yes");
        userName.value="";
        password.value="";
        window.location.href ="cashier.html";
        cashierShow.value= name;
    }if(name.charAt(0)=="M" || name.charAt(0)=="m"){
        userName.value="";
        password.value="";
        window.location.href ="owner.html";
    }
}

//===========================add cashier======================================================

// let btnAddCashier = document.getElementById("btnAddCashier");


function addCashier(){
    window.location.href ="addCashier.html";
}


// ============================view cashiers===========================================

function viewCashier(){
    window.location.href ="viewCashierDetails.html";
}


// ================================view customer============================================

function viewCustomer(){
    window.location.href ="viewCustomerDetails.html";
}