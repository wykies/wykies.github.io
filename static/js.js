let myIndex = -1;

carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex = ++myIndex % x.length;
    x[myIndex].style.display = "block";
    if (x.length > 0) { // To prevent call back on pages with no images
        setTimeout(carousel, 10000); // TODO 4: Move delay to file with configs
    }
}