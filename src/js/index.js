document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope");
    const foldStamp = document.querySelector(".top-fold-stamp");
    const audio = new Audio("./assets/music/perfect.mp3");
    audio.volume = 0.15;
    envelope.addEventListener(
        "click",
        () => {
            envelope.classList.toggle("envelope_transformed");
            setTimeout(() => {
                foldStamp.classList.toggle("top-fold-stamp-cliped");
            }, 1000);
            audio.play();
        },
        { once: true }
    );
});
