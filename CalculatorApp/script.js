let inputValue = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arrayValue = Array.from(buttons);

arrayValue.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=')
        {
            string = eval(string);
            inputValue.value = string;
        }

        else if (e.target.innerHTML == 'CE')
        {
            string = "";   
            inputValue.value = string; 
        }

        else if (e.target.innerHTML == 'DEL')
        {
            string = string.substring(0, string.length-1);
            inputValue.value = string;
        }

        else 
        {
            string += e.target.innerHTML;
            inputValue.value = string;
        }
    })
})