const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick = () =>{
        if (item.id == 'clear'){
            display.value = '';
        }
        else if (item.id == 'backspace'){
            let string = display.value.toString();
            display.value = string.substr(0, string.length - 1);
        }
        else if (display.value != '' && item.id == 'equal'){
            text = display.value.replaceAll("^","**");
            text = text.replaceAll("x","*");
            display.value = eval(text);
        }
        else if (display.value == '' && item.id == 'equal'){
            display.value = "Empty!";
            setTimeout(() => (display.value = ''), 2000);
        }
        else {
            display.value += item.id;
        }
    }
})

document.addEventListener('keydown', function(event) {
    const key = event.key;
    

    if (key === 'Enter') {
        if (display.value == ''){
            display.value = "Empty!";
            setTimeout(() => (display.value = ''), 2000);
        }
        else{
            text = display.value.replaceAll("^","**");
            text = text.replaceAll("x","*");
            display.value = eval(text);
        }
    } 

    else if (key === 'Backspace') {
        let string = display.value.toString();
        display.value = string.substr(0, string.length - 1);
    } 
    
    else if (key === 'Delete') {
        display.value = '';
    }

    else if (event.shiftKey && event.code === 'Digit5') {     
        display.value+="%";        
    }

    else if (event.shiftKey && event.code === 'Digit6') {     
        display.value+="^";        
    }

    else if (event.code.startsWith('Numpad')) {
        const num = key[key.length - 1];
        display.value += num;
    } 
    
});

// Toggle Theme 

const themeToggleBtn = document.querySelector(".theme-toggle");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () =>{
    calculator.classList.toggle('light');
}