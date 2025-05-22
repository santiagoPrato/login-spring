const param = new URLSearchParams(window.location.search);
console.log(param.get('error'));
if (param.get('error') === "true") {
    document.getElementById("error").className = "d-block mt-3";
}