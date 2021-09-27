
let h=document.getElementById('main');
let hh=document.getElementById('mains');
let intervel;

function start(){
   intervel= setInterval(stopwatch,10);
}
let tens=0,second=0;
function stopwatch(){

tens++;
if(tens<=9)
   h.innerHTML="0"+tens;
 if(tens>9){
    h.innerHTML=tens ; 
 }
 if(tens>99){
    second++;
    tens=0;
    h.innerHTML='0'+0;
 }
 if(second<=9){
    hh.innerHTML=second+":";

 }
 else if(second>9)
    hh.innerHTML=second+":" ;


}


function pause(){
   clearInterval(intervel);
}
function reset(){
   clearInterval(intervel);
   tens=0;
   second=0;
   h.innerHTML="0"+tens;
   hh.innerHTML=+second+":";

}