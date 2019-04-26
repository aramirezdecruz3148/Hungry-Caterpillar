function vomitUnicorn(Mockunicorn, colorName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);
    Mockunicorn.appendChild(span);
}

export default vomitUnicorn;