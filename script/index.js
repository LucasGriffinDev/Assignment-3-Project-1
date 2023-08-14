document.addEventListener('mousemove', (e) => {
    const aside = document.querySelector('aside');
    const windowHeight = window.innerHeight;
    const asideHeight = aside.offsetHeight;
    let topPosition = e.clientY - (asideHeight / 2);

    if (topPosition < 0) topPosition = 0;
    if (topPosition + asideHeight > windowHeight) topPosition = windowHeight - asideHeight;

    aside.style.top = topPosition + "px";
});
