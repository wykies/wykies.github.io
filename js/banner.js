let currImgIndex = -1;
let timerCarousel;
let carouselImgs;


function advanceCarousel() {
    carouselImgs[currImgIndex].style.display = "none";
    currImgIndex = ++currImgIndex % carouselImgs.length;
    carouselImgs[currImgIndex].style.display = "block";
}

function onClickHandlerAdvance() {
    clearInterval(timerCarousel);
    advanceCarousel();
    timerCarousel = setInterval(advanceCarousel, BANNER_TIMEOUT);
}

(function setupCarousel() {
    carouselImgs = document.getElementsByClassName(IMGS_CLASS);
    if (carouselImgs.length <= 0) { // To prevent call back on pages with no images
        console.log("No Images found with class: " + IMGS_CLASS);
        return; // Do nothing no images found
    }

    // Hide all images
    for (let i = 0; i < carouselImgs.length; i++) {
        carouselImgs[i].style.display = "none";
    }

    currImgIndex = carouselImgs.length - 1; // Initialize last image
    timerCarousel = setInterval(advanceCarousel, BANNER_TIMEOUT);
    advanceCarousel();

    // Set onclick handler to advance photo
    let container = document.getElementById(IMGS_CONTAINER_ID);
    container.onclick = onClickHandlerAdvance;
})();