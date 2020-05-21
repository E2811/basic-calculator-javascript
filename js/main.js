let operation ="";
let screen = document.calculator.screen;


function insert(num){
  display = screen.value+num;
  screen.value = display;
  console.log(screen.value)
}

function operator(eq){
  operation += screen.value + eq;
  screen.value = "";
}

function result(){
  operation +=screen.value;
  if (operation){
    screen.value = eval(operation);
  }
  operation ="";
}
