const Engineer = require('../lib/engineer');
// Testing a newly created employee
const engineerTest = new Engineer('Ryan', '01', 'rd3@knights.ucf.edu', 'imSpires');

test('to get values from constructor object', () => {
    expect(engineerTest.name).toBe('Ryan');
    expect(engineerTest.id).toBe('01');
    expect(engineerTest.email).toBe('rd3@knights.ucf.edu');
    expect(engineerTest.github).toBe('imSpires');
});

test('test if getGithub returns github username', () => {
    expect(engineerTest.getGithub()).toBe('imSpires');
});

test('test if getRole() returns the role', () => {
    expect(engineerTest.getRole()).toBe('Engineer');
});