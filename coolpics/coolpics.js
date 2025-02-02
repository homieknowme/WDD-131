const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {

    const clickedElement = event.target;

    if (clickedElement.tagName !== "IMG") return;

    const srcParts = clickedElement.src.split("-");
    const fullImageSrc = srcParts[0] + "-full.jpeg";

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedElement.alt));

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);