const test = QUnit.test;

function vomitUnicorn(mockUnicorn, colorName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);
    mockUnicorn.appendChild(span);
}

test('', (assert) => {
    // arrange
    const colorName = 'red';
    const mockUnicorn = document.createElement('div');
    const expected = '<span class="part red"></span>';
    // act
    vomitUnicorn(mockUnicorn, colorName); 
    // assert
    const parentInnerHTML = mockUnicorn.innerHTML;
    assert.equal(parentInnerHTML, expected);
});

