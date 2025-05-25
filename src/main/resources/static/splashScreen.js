const splashScreen = document.getElementById("splash-screen");
const bodyContent = document.getElementById("main");

bodyContent.className = "d-none";

setTimeout( () =>{
    splashScreen.classList.remove("d-none");
    bodyContent.classList.add("d-block");
},2000);