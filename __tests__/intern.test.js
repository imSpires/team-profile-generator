const Intern = require('../lib/intern');
// Testing a newly created employee
const internTest = new Intern('Ryan', '01', 'rd3@knights.ucf.edu', 'OHS');

test('to get values from constructor object', () => {
    expect(internTest.name).toBe('Ryan');
    expect(internTest.id).toBe('01');
    expect(internTest.email).toBe('rd3@knights.ucf.edu');
    expect(internTest.school).toBe('OHS');
});

test('test if getSchool() returns the interns school', () => {
    expect(internTest.getSchool()).toBe('OHS');
});

test('test if getRole() returns the role', () => {
    expect(internTest.getRole()).toBe('Intern');
});