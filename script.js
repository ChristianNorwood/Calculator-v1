let text1 = document.getElementById('text');text1.value = "0";
let equals = document.getElementById('equals');
let clear = document.getElementById('C');
let del = document.getElementById('Back');
let sign = document.getElementById('sign');
let dec = document.getElementById('decimal');
let op = document.getElementsByClassName('operator');
let num = document.getElementsByClassName('num');

let calculator =  {
    operand: "",
    opPass: ""
};

for(var i in Object.keys(num)) {
    num[i].onclick = function() {
        if (text1.value == 0){
            calculator.operand += this.id;
            calculator.opPass += this.id;
            text1.value = calculator.opPass;
        }
        else {
            calculator.operand += this.id;
            calculator.opPass += this.id;
            text1.value = calculator.opPass;
        }
    }
};

for(var i in Object.keys(op)){
    op[i].onclick = function(){
        if (text1.value == "0"){
        }
        else {
            if (text1.value.slice(-1) == "*" || text1.value.slice(-1) == "/" || text1.value.slice(-1) == "+" || text1.value.slice(-1) == "-"){
                var a = text1.value;
                text1.value = a.substring(0, a.length - 1);
                text1.value +=this.id;
                calculator.opPass = text1.value;
                calculator.operand = "";
                console.log(calculator.opPass)
            }
            else {
                calculator.opPass +=this.id;
                text1.value = calculator.opPass;
                calculator.operand = "";
            } 
        }
        
    }
};

del.addEventListener("click", e => {
    a = text1.value;
    if (a.length == 1 || text1.value.slice(-1) == "0"){
        text1.value = "0";
    }
    else {
        var a = text1.value;
        calculator.opPass.length -1;
        text1.value = a.substring(0, a.length -1);
        calculator.opPass = text1.value;
    }
});

clear.addEventListener("click", e => {
    text1.value = "0";
    calculator.operand = "";
    calculator.opPass = "";    
});

equals.addEventListener("click", e  => {
    a = text1.value;
    text1.value = eval(a);
    calculator.opPass = text1.value;
});

dec.addEventListener("click", e => {
    if (calculator.operand.includes(".")){
    }
    else {
        calculator.operand += ".";
        calculator.opPass += ".";
        text1.value = calculator.opPass;
    }
});

sign.addEventListener("click", e => {
    if (text1.value == "0"){
    }
    else {
        if (calculator.operand.includes("-")){
            let a = calculator.operand.substring(1);
            calculator.opPass = calculator.opPass.replace(calculator.operand, a);
            calculator.operand = a;
            text1.value = calculator.opPass;
        }
        else {
            let a = "-" + calculator.operand;
            calculator.opPass = calculator.opPass.replace(calculator.operand, a);
            calculator.operand = a;
            text1.value = calculator.opPass;
        }    
    }  
});
