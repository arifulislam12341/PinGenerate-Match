function getPin(){
    const pin =Math.round(Math.random()*10000);
const PinString=pin +'';

    if(PinString.length ==4){
        return pin;
    }
    else{
        console.log("Press again because of 3 digit");
        return getPin();
    }
}


function generatePin(){
   const pin=getPin();
   document.getElementById('pin-display').value=pin;
}

document.getElementById('key-pad').addEventListener('click',
function(event){

   // console.log(event.target.innerText);
const number=event.target.innerText;
if(isNaN(number)){
if(number=='C'){
    document.getElementById('typed-numbers').value='';
}
}
else{
    const previousVAlue=document.getElementById('typed-numbers').value;
    const newValue=previousVAlue+number;
    document.getElementById('typed-numbers').value=newValue;
}
});
function verifyPin(){
   const pin=document.getElementById('pin-display').value;
   const typeNumbers=document.getElementById('typed-numbers').value;
   const Success=document.getElementById('notify-success');
   const fail=document.getElementById('notify-failed');
if(pin ==typeNumbers){
  
    Success.style.display='block';
  
    fail.style.display='none';
}
else{
   
    fail.style.display='block';
    Success.style.display='none';
}

}