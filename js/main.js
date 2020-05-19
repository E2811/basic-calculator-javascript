let operation ="";

function insert(num){
  display = document.calculator.screen.value+num;
  document.calculator.screen.value = display;
}

function operator(eq){
  operation += document.calculator.screen.value + eq;
  document.calculator.screen.value = "";
}

function result(){
  operation +=document.calculator.screen.value;
  if (operation){
    document.calculator.screen.value = eval(operation);
  }
  operation ="";
}
