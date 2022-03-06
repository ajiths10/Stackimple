console.log('welcome to stack...')
let arr = [];
let topp =-1 ;
    document.getElementById("valuesubmit").addEventListener('click', function xzy(){
        var select = document.getElementById("selection");
        var stackvalue = document.getElementById("textvalue")
        //console.log(select.value);
        let a =JSON.parse(select.value);
        let v =JSON.parse(stackvalue.value);
        switch (a){
            case 1 :{
                //console.log(a);
                    pushstack(v);
                     break;
                    }
            case 2 : popstack();
                     break;
            case 3 : displaystack();
                     break;
            default : console.log( `${select.value} is invalid input.please enter proper input`);
                      break;
        }
    })
    
function pushstack(v){
    topp = topp+1;
    arr[topp]=v; 
    displaystack(); 
}

function displaystack(){
    console.log("your stack =")
    for(var j=0;j<=topp;j++){
        console.log(arr[j]);
    }
}

function popstack(){
    topp--;
    displaystack();
}