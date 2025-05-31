window.addEventListener("DOMContentLoaded", () => {
    setTimeout(async () => {
        const splash = document.getElementById("splash-screen");
        splash.classList.add("d-none");

        console.log("Lanzando fetch /me…");
        try {
            const res = await fetch("/me", {
                method: "GET",
                credentials: "include"
            });

            if (!res.ok) {
                console.log("No autenticado o sesión inválida. Redirigiendo a login.");
                window.location.href = "/index.html";
                return;
            }

            const profile = await res.json();
            console.log("Respuesta perfil:", profile);
            document.getElementById("usuarioNombre").textContent = profile.username;
            document.getElementById("usuarioEmail").textContent = profile.email;
            document.getElementById("usuarioEdad").textContent = profile.age;

            const main = document.getElementById("main");
            main.classList.remove("d-none");
        } catch (error) {
            console.error("Error al llamar a /me:", error);
            window.location.href = "/index.html";
        }
    }, 2000);
});
