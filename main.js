let resizeTimeout;

function updateViewportSize()
{
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {

        const width = window.innerWidth;
        const height = window.innerHeight;

        document.getElementById('koko').innerHTML = `width: ${width}<br>height: ${height}`;

    }, 200);

    return;
}

window.addEventListener('resize', updateViewportSize);