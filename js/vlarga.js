var number1 ="";
var number2 = "";
var sign = "";
var final = "";
const screen = document.calculator.screen;


function insert(num){
    display = screen.value+num;
    screen.value = display;
}

function operar(){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch(sign){
        case '+':
            final = number1 + number2;
            break;
        case '-':
            final = number1 - number2;
            break;
        case '*':
            final = number1*number2;
            break;
        case '/':
            final = number1/number2;
    }
    return final;
}

function operator(op){
    if (number1!="" && sign!=""){
        number2 = screen.value;
        number1 = operar();
        number2 = "";
    }else{
        number1= screen.value;
    }
    screen.value ="";
    sign = op
}

function result(){
    number2= screen.value;
    final = operar();
    screen.value = final;
    number1 =final;
    number2 ="";
    sign="";
}
