console.log('Loaded!');
var button =document.getElementById('counter');
var counter=0;

button.onclick=function (){

counter=counter+ 1;
var snap=document.getElementById('count');
snap.innerHTML= counter.toString();
    
};

