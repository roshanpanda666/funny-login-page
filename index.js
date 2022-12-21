document.querySelector("button").addEventListener("click",fun1)

function fun1(){

    var inps=document.getElementById("fname").value

    var inp=inps.toLowerCase()

    if(inp=="228104"){
        namee="user-name"
        var inps=document.getElementById(namee).value
        var inp=inps.toLowerCase()

        let utterance = new SpeechSynthesisUtterance("hello, "+inp);
        speechSynthesis.speak(utterance);

        document.querySelector("h1").innerHTML="password correct"
 
    }

    else{
         var audio = new Audio("chal_bsdk.mp3");
         audio.currentTime = 4;
         audio.play();
         wrong=document.querySelector("h1").innerHTML="put the correct password"

    }
     
    
    }
