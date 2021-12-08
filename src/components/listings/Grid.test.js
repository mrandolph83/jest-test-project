import data from '../../data/courses.json';

// NUMBER tests
const numItems = data.length;

test('Number of items = 12', () => {
    expect(numItems).toBe(12)
});

test('Number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12)
});

// STRING tests

const stringTest = data[0].title; 

test('There is a JS in this title', () => {
    expect(stringTest).toMatch(/JS/);
});
// different matchers, full documentation available
test('The title contains React', () => {
    expect(stringTest).toContain('React');
});

// ARRAY tests

const array1 = ["React Native", "React"];

test('The list of courses mentions React Native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(array1));
});

// OBJECT tests

test('The first course has a property title', () => {
    expect(data[0]).toHaveProperty('title');
});

// first variable is key, second is value
test('The first course has a property of views and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
});




