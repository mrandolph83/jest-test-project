import data from '../../data/courses.json';

// Number tests
const numItems = data.length;

test('Number of items = 12', () => {
    expect(numItems).toBe(12)
});

test('Number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12)
});

// String tests

const stringTest = data[0].title; 

test('There is a JS in this title', () => {
    expect(stringTest).toMatch(/JS/);
});
// different matchers, full documentation available
test('The title contains React', () => {
    expect(stringTest).toContain('React');
});



