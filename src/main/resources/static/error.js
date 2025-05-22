const param = new URLSearchParams(window.location.search);
if(param.get('error') === true){
    document.getElementById("error").style.display = "block";
}