document.addEventListener("DOMContentLoaded", () => {
    const btnComenzar = document.getElementById("btnComenzar");

    if (btnComenzar) {
        btnComenzar.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "work.html";
        });
    }
});