const param = new URLSearchParams(window.location.search);
if (param.get('error') === "true") {
    document.getElementById("error").className = "d-block mt-3";
}