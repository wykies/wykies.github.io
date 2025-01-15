window.addEventListener("load", onLoadFunction);

function onLoadFunction(e) {
    onResizeFunction();
    window.addEventListener("resize", onResizeFunction);
}

function onResizeFunction(e) {
    const content = document.getElementById('content');
    content.style.height = (
        content.parentElement.offsetHeight -
        content.previousElementSibling.offsetHeight -
        content.nextElementSibling.offsetHeight) + 'px';
}