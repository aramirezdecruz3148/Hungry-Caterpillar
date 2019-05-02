function vomitUnicorn(Mockunicorn, colorName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);
    span.classList.add('puke');
    Mockunicorn.prepend(span);
}

export default vomitUnicorn;