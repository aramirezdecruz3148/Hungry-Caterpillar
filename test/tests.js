import vomitUnicorn from '../src/vomit-unicorn.js';
const test = QUnit.test;

test('test to cause vomit balls to be created from my buttons', (assert) => {
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

