const dispaly = document.getElementById("display");

function appendtodisplay(input){
      dispaly.value  += input
}

function cleardisplay(){
      dispaly.value = "";
}

function calculate(){
      dispaly.value = eval(dispaly.value);
}

function multipli(){
    dispaly.value = eval(display.value);
}
