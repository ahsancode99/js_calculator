function calculate(btnValue){
    var inputCalculation = document.getElementById("calc");
    var calInp = inputCalculation.value;
    var result_span = document.getElementById('result');


    if(btnValue === "="){
        var result = eval(calInp);
        result_span.innerText = result;
        inputCalculation.value = inputCalculation.value.slice(0,0)
    }
    else if(btnValue === "clear"){
       
        inputCalculation.value = inputCalculation.value.slice(0,-1)
    }
    else if(btnValue === "clearAll"){
        inputCalculation.value = inputCalculation.value.slice(0,0)
        result_span.innerText = ''
        
    }
    else{
        inputCalculation.value += btnValue;
    }
}