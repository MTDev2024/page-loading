window.addEventListener('load', loader);

function loader() {
    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: "power2.out"})
    .to('.bloc-txt', {height: "auto", duration: 0.6, ease: "power2.out"}, '-=0.8') // animation de la hauteur de .bloc-txt
    .to('.bloc-txt h2', {y: 0, ease: "power2.out"}, '-=0.6') // animation du texte h2
    .to('.f2', {y: 0, duration: 0.4, ease: "power2.out"}) // animation de .f2
    .add(() => {
        // Change l'image de fond de .flip-img1
        document.querySelector('.flip-img1').style.backgroundImage = "url('ressources/image1.jpg')";
    })
    .to('.f2', {y: '-100%'})
    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        // Masque .load-container après l'animation d'opacité
        document.querySelector('.load-container').style.display = "none";
    }) // <-- Vous aviez oublié de fermer cette fonction ici
    .add(() => {
        document.querySelector('video').muted = true;
        // Lance la vidéo après un léger décalage
        document.querySelector('video').play()
    }, '-=0.8')
}
