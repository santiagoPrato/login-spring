document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("splash-screen").classList.add("d-none");
        document.getElementById("main").classList.remove("d-none");
    }, 2000);
});