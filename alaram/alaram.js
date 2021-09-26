
//current time;
let chr,cmin,csec,shr,smin,f,k;

uhr=16;
umin=17;

let sound=new Audio('song.mp3');

setInterval(times,1000);
function times(){
    let date=new Date();
    chr=date.getHours();
    cmin=date.getMinutes();
    csec=date.getSeconds();
    
    chr=standered(chr);
    cmin=standered(cmin);
    csec=standered(csec);
    document.getElementById('ctime').innerHTML=chr+":"+cmin+":"+csec;
  
  
}
function standered(hr){
return ((hr<10) ? "0"+hr:hr);
}


function hrmenu(){
    var select=document.getElementById('shr');
    hr=24;
    for(let  i=0;i<24;i++){
        select.options[select.options.length]=new Option((i<10)?"0"+i :i);
    }
}
hrmenu();

function minmenu(){
    var select=document.getElementById('smin');
    hr=59;
    for(let  i=0;i<=hr;i++){
        select.options[select.options.length]=new Option((i<10)?"0"+i :i);
    }
}
minmenu();

function sett(){
  k=setInterval(alr,1000)
    function alr(){
        shr=document.getElementById('shr');
        smin=document.getElementById('smin');;
        let ahr=shr.options[shr.selectedIndex].value;
        let amin=smin.options[smin.selectedIndex].value;
    
  
    
        let date=new Date();
        chr=date.getHours();
        cmin=date.getMinutes();
        csec=date.getSeconds();
        
        chr=standered(chr);
        cmin=standered(cmin);
        csec=standered(csec);
      
        if(chr==ahr && cmin==amin && f==1){
         
            sound.play();
            sound.loop=true;
            f=0;
        } 
    }
}

let d=1;
function set(){
    
  
        f=1;
        sett();


}
function pause(){
clearInterval(k);
sound.pause();
}



