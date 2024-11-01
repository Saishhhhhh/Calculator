let inputArea = document.getElementById("textin")
let key_button = document.querySelectorAll(".button")


// document.getElementById("7").addEventListener("click",function(){
//     inputArea.value += "7";
// })

// document.getElementById("7").addEventListener("keydown",function(event){
//     if(event.key === "7"){
//     inputArea.value += "7";
//     }
// })

key_button.forEach(function(button){
    button.addEventListener("click", function(){

        if(button.innerText === "AC"){
            inputArea.value = "";
        }else if(button.id === "del"){
            inputArea.value = inputArea.value.slice(0,-1)
        }else if(button.id === "equal"){
            inputArea.value = eval(inputArea.value);
        }else if(button.id === "mul"){
            inputArea.value += "*";
        }else if(button.id === "divide"){
            inputArea.value += "/";
        }else if(button.id === "root"){
            inputArea.value = Math.sqrt(inputArea.value);
        }else if(button.id === "x2"){
            inputArea.value = inputArea.value*inputArea.value;
        }else{
            inputArea.value += button.innerText;
        }
    })
})

key_button.forEach(function(button){
    button.addEventListener("keydown", function(event){

        const key = event.key;

        if(key === "Delete"){
            inputArea.value = "";
        }else if(key === "Backspace"){
            inputArea.value = inputArea.value.slice(0,-1)
        }else if(key === "Enter"){
            inputArea.value = eval(inputArea.value);
        }else if("0123456789+-.*/".includes(key)) {   
            inputArea.value += key;
        }
    })
})

