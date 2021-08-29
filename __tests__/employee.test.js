const Employee = require('../lib/employee');
// Testing a newly created employee
const employeeTest = new Employee('Ryan', '01', 'rd3@knights.ucf.edu');

test('to get values from constructor object', () => {
    expect(employeeTest.name).toBe('Ryan');
    expect(employeeTest.id).toBe('01');
    expect(employeeTest.email).toBe('rd3@knights.ucf.edu');
});

test('test if getName() returns the name', () => {
    expect(employeeTest.getName()).toBe('Ryan');
});

test('test if getId() returns the id', () => {
    expect(employeeTest.getId()).toBe('01');
});

test('test if getEmail() returns the email', () => {
    expect(employeeTest.getEmail()).toBe('rd3@knights.ucf.edu');
});

test('test if getRole() returns the role', () => {
    expect(employeeTest.getRole()).toBe('Employee');
});