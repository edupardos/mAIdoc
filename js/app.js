document.addEventListener("DOMContentLoaded", function() {
    
    const h1 = document.getElementById("typewriter");
    if (h1) {
        const textos = [
            "¿En qué podemos ayudarte?",
            "¿Qué te gustaría hacer hoy?",
            "¿Estás preparado para empezar?",
            "¿Qué necesitas?"
        ];

        const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
        let i = 0;
        const speed = 70;
        
        function typeH1() {
            if (i <= textoAleatorio.length) {
                h1.textContent = textoAleatorio.slice(0, i);
                i++;
                setTimeout(typeH1, speed);
            }
        }
        typeH1();
    }

    function typeWriter(el, text, speed = 60) {
        let i = 0;

        function write() {
            if (i <= text.length) {
                el.textContent = text.slice(0, i);
                i++;
                setTimeout(write, speed);
            }
        }
        write();
    }

    const headings = document.querySelectorAll(".heading-typewriter");

    if (headings.length > 0) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        if (el.dataset.typed === "true") return;

                        el.dataset.typed = "true";

                        const originalText = el.dataset.text || "";
                        el.textContent = "";
                        typeWriter(el, originalText, 60);

                        obs.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.4
            }
        );

        headings.forEach(el => {
            el.dataset.text = el.textContent.trim();
            el.textContent = "";
            observer.observe(el);
        });
    }
});