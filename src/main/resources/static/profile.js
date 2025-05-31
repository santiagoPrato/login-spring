window.addEventListener("DOMContentLoaded", () => {
    setTimeout(async () => {
        const splash = document.getElementById("splash-screen");
        splash.classList.add("d-none");

        try {
            const res = await fetch("/me", {
                method: "GET",
                credentials: "include"
            });

            if (!res.ok) {
                window.location.href = "/index.html";
                return;
            }

            const profile = await res.json();
            document.getElementById("usuarioNombre").textContent = profile.username;
            document.getElementById("usuarioEmail").textContent = profile.email;
            document.getElementById("usuarioEdad").textContent = profile.age;

            const main = document.getElementById("main");
            main.classList.remove("d-none");
            main.classList.add("d-flex");
        } catch (error) {
            window.location.href = "/index.html";
        }
    }, 2000);
});
