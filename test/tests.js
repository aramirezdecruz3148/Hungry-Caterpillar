import vomitUnicorn from '../src/vomit-unicorn.js';
const test = QUnit.test;

test('test to cause vomit balls to be created && to add additional class to move puke', (assert) => {
    // arrange
    const colorName = 'red';
    const mockUnicorn = document.createElement('div');
    const puke = 'puke';
    const expected = '<span class="part red puke"></span>';
    // act
    vomitUnicorn(mockUnicorn, colorName, puke); 
    // assert
    const parentInnerHTML = mockUnicorn.innerHTML;
    assert.equal(parentInnerHTML, expected);
});



