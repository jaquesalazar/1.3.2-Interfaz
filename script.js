document.addEventListener("DOMContentLoaded", function () {
    const botonIniciarSesion = document.getElementById("iniciar-sesion"),
        botonRegistrarse = document.getElementById("registrarse"),
        formularioIniciarSesion = document.querySelector(".iniciar-sesion"),
        formularioRegistrar = document.querySelector(".registrar"),
        loginForm = document.getElementById("loginForm"),
        mensajeError = document.getElementById("mensaje-error");


    botonRegistrarse.addEventListener("click", () => {
        formularioIniciarSesion.classList.add("ocultar");
        formularioRegistrar.classList.remove("ocultar");
    });

    botonIniciarSesion.addEventListener("click", () => {
        formularioRegistrar.classList.add("ocultar");
        formularioIniciarSesion.classList.remove("ocultar");
    });

    

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const correoCorrecto = "taylorswift@gmail.com";
        const contraCorrecta = "t123";

        const correo = document.getElementById("correo").value;
        const contra = document.getElementById("contrasena").value;

        if (correo === correoCorrecto && contra === contraCorrecta) {
            window.location.href = "principal.html";
        } else {
            mensajeError.textContent = "Correo o contraseña incorrectos";
        }
    });
});

