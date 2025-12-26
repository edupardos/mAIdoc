document.addEventListener("DOMContentLoaded", () => {
    const btnComenzar = document.getElementById("btnComenzar");

    if (btnComenzar) {
        btnComenzar.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "work.html";
        });
    }

    const pageLogin = document.getElementById("pageLogin");
    const pageRegistro = document.getElementById("pageRegistro");
    const pageForgot = document.getElementById("pageForgot");

    const btnRegistro = document.getElementById("btnRegistro");
    const btnLogin = document.getElementById("btnLogin");
    const linkForgot = document.getElementById("linkForgot");
    const btnVolverLogin = document.getElementById("btnVolverLogin");

    if (!pageLogin || !pageRegistro || !pageForgot) {
        return;
    }

    const mostrarSolo = (pageToShow) => {
        const pages = [pageLogin, pageRegistro, pageForgot];

        pages.forEach((page) => {
            if (!page) return;
            if (page === pageToShow) {
                page.classList.add("page-active");
            } else {
                page.classList.remove("page-active");
            }
        });
    };

    const mostrarLogin = () => mostrarSolo(pageLogin);
    const mostrarRegistro = () => mostrarSolo(pageRegistro);
    const mostrarForgot= () => mostrarSolo(pageForgot);

    if (btnRegistro) {
        btnRegistro.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarRegistro();ñ
        });
    }

    if (btnLogin) {
        btnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarLogin();
        });
    }

    if (linkForgot) {
        linkForgot.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarForgot();
        });
    }

    if (btnVolverLogin) {
        btnVolverLogin.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarLogin();
        });
    }
});