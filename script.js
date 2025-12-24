function bukaUndangan() {
    const overlay = document.getElementById('overlay');
    const bgMusic = document.getElementById('bgMusic');
    
    overlay.style.transition = "1s";
    overlay.style.opacity = "0";
    
    setTimeout(() => {
        overlay.style.display = "none";
        document.getElementById('main-content').classList.remove('hidden');
        bgMusic.play();
    }, 1000);
}

// Target Waktu: 5 Jan 2026 jam 10 pagi
const weddingDate = new Date("Jan 5, 2026 10:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("mins").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("secs").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "<h3>Acara Sedang Berlangsung</h3>";
    }
}, 1000);
