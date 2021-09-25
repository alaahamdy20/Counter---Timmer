const value = document.getElementById('value')
function incrment(){
    value.innerHTML = parseInt(value.innerHTML) + 1
}
function decrment(){
    if(parseInt(value.innerHTML) > 0)
    value.innerHTML = parseInt(value.innerHTML) -1 
}
function rest(){
    value.innerHTML = 0
}


//Timmer function

const sec = document.getElementById('sec')
const min = document.getElementById('min')
let t = null

function start(){
    if(t === null){
        t = setInterval(() => {
            //set up minutes 
            if(parseInt(sec.innerHTML) === 59){
                sec.innerHTML = "00"
                if(parseInt(min.innerHTML) < 9){
                    min.innerHTML = "0" + (parseInt(min.innerHTML) + 1) 
                }else{
                    min.innerHTML = parseInt(min.innerHTML) + 1 
                }
            }
            //set up secends
            if(parseInt(sec.innerHTML) < 9){
                sec.innerHTML = "0" + (parseInt(sec.innerHTML) + 1) 
            }else{
                sec.innerHTML = parseInt(sec.innerHTML) + 1 
            }           
        }, 1000);
    }
}
function stop(){
    clearInterval(t)
    t = null;
}
function restT(){
    sec.innerHTML = "00"
    min.innerHTML = "00"
    stop()
}