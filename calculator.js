let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        
        console.log(typeof buttontext);
        console.log(buttontext);
        
        if(buttontext=='x'){
           screenvalue += '*';
           console.log(screenvalue);
           screen.value += 'x';
        }

        else if(buttontext=='AC'){
             screenvalue = '';
            screen.value= '';
        }
        else if(buttontext == '='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}
