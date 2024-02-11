/* --------------------------SCALE WEBPAGE WHEN WIDTH MORE THAN 1920--------------------------- */
function checkResolution() {
    if(window.innerWidth > 1920) {
        const vh = window.innerHeight * 0.01;
        const zoom = window.innerWidth / 1920;
        document.body.style.zoom = zoom;
        document.body.style.setProperty('--vh', `${vh/zoom}px`);
    } else {
        document.body.style.removeProperty('zoom');
        document.body.style.removeProperty('--vh');
    }
}

checkResolution();

addEventListener("resize", (event) => {
    checkResolution();
});

/* -------------------------------------------CONTACT------------------------------------------ */
const info = document.getElementById('info');

info.addEventListener('click', (event) => {
    document.location.href = "contact.html";
});