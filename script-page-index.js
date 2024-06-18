window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    })
})


const countdownDate = new Date("Jun 30, 2024 18:30:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = days;
    document.getElementById("jam").innerHTML = hours;
    document.getElementById("menit").innerHTML = minutes;
    document.getElementById("detik").innerHTML = seconds;

}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio('music/Backsound.mp3');
    audio.loop = true; // Set loop ke true agar musik diputar terus menerus

    // Ambil tombol-tombol play dan pause
    var playBtn = document.getElementById('play');
    var pauseBtn = document.getElementById('pause');

    // Tambahkan event listener untuk tombol play
    playBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default dari tombol

        // Mulai memutar musik jika sedang tidak diputar
        if (audio.paused) {
            audio.play();
        }
    });

    // Tambahkan event listener untuk tombol pause
    pauseBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default dari tombol

        // Jeda pemutaran musik jika sedang diputar
        if (!audio.paused) {
            audio.pause();
        }
    });

    // Ambil tombol "Open The Invitation"
    var openInvitationBtn = document.querySelector('.tbl-hitam a');

    // Tambahkan event listener untuk klik pada tombol
    openInvitationBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default dari link

        // Cari elemen dengan ID halaman-0 dan halaman-1
        var halaman0 = document.getElementById('halaman-0');
        var halaman1 = document.getElementById('halaman-1');
        var halaman2 = document.getElementById('halaman-2');
        var play = document.getElementById('play');
        var pause = document.getElementById('pause');

        // Ubah tampilan halaman-0 menjadi none dan halaman-1 serta halaman-2 menjadi block
        halaman0.style.display = 'none';
        halaman1.classList.add('block');
        halaman2.classList.add('block');
        play.classList.add('block');
        pause.classList.add('block');

        // Setelah mengklik tombol, mungkin kita ingin mengatur posisi scroll ke bagian atas halaman-1
        window.scrollTo({ top: halaman1.offsetTop, behavior: 'smooth' });

        // Mulai memutar musik
        audio.play();
    });

    // Setelah dokumen dimuat, pastikan halaman-0 ditampilkan dan halaman-1 serta halaman-2 disembunyikan
    var halaman0 = document.getElementById('halaman-0');
    var halaman1 = document.getElementById('halaman-1');
    var halaman2 = document.getElementById('halaman-2');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    halaman0.style.display = 'block'; // Tampilkan halaman-0
    halaman1.style.display = 'none'; // Sembunyikan halaman-1
    halaman2.style.display = 'none';
    play.style.display = 'none';
    pause.style.display = 'none';
});

const setHeight = () => {
    const currentHeight = window.innerHeight;
    document.body.style.height = '${currentHeight}px';};
window.addEventListener("resize", setHeight);
setHeight();

