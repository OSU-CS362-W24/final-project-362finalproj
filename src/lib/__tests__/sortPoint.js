const Sorter = require('../sortPoints.js');

test('empty array returns empty array', () => {
    // Arrange
    const points = [];
    const expected = [];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});

test('array with one element returns same array', () => {
    // Arrange
    const points = [{x: 1, y: 2}];
    const expected = [{x: 1, y: 2}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});


test('array with two elements sorted by x', () => {
    // Arrange
    const points = [{x: 5, y: 2}, {x: 3, y: 4}];
    const expected = [{x: 3, y: 4}, {x: 5, y: 2}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});

test('array with three elements sorted by x', () => {
    // Arrange
    const points = [{x: 5, y: 2}, {x: 7, y: 4}, {x: 3, y: 1}];
    const expected = [{x: 3, y: 1}, {x: 5, y: 2}, {x: 7, y: 4}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});

test('correctly sorts points negative x values', () => {
    // Arrange
    const points = [{x: -5, y: 2}, {x: -7, y: 4}, {x: -3, y: 1}];
    const expected = [{x: -7, y: 4}, {x: -5, y: 2}, {x: -3, y: 1}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});

test('elements with same x values are not sorted by y', () => {
    // Arrange
    const points = [{x: 5, y: 2}, {x: 5, y: 4}, {x: 5, y: 1}];
    const expected = [{x: 5, y: 2}, {x: 5, y: 4}, {x: 5, y: 1}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});

test('elements with postive, negative and zero x values are sorted correctly', () => {
    // Arrange
    const points = [{x: 5, y: 2}, {x: -7, y: 4}, {x: 0, y: 1}];
    const expected = [{x: -7, y: 4}, {x: 0, y: 1}, {x: 5, y: 2}];
    // Act
    const sorter = new Sorter(points);
    // Assert
    expect(sorter).toEqual(expected);
});
