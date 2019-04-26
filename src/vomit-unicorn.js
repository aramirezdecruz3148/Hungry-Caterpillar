function vomitUnicorn(Mockunicorn, colorName, puke) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);
    span.classList.add(puke);
    Mockunicorn.appendChild(span);
}

export default vomitUnicorn;