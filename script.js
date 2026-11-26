
/* =========================
   CONTROLE DA MÚSICA
========================= */

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

music.volume = 0.25;

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play()
            .then(() => {
                musicButton.textContent = "♫ Música: ON";
            })
            .catch(() => {
                alert("Não foi possível reproduzir a música. Confira o arquivo trilha.mp3.");
            });

    } else {

        music.pause();
        musicButton.textContent = "♫ Música: OFF";

    }

});


/* =========================
   ANIMAÇÕES AO ROLAR A PÁGINA
========================= */

const elements = document.querySelectorAll(
    ".about, .projects, .contact, .project-card"
);

elements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

elements.forEach(element => {
    observer.observe(element);
});
