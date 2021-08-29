const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
// Testing a newly created employee
const employeeTest = new Employee('Ryan', '01', 'rd3@knights.ucf.edu');

test('to get values from constructor object', () => {
    expect(employeeTest.name).toBe('Ryan');
    expect(employeeTest.id).toBe('01');
    expect(employeeTest.email).toBe('rd3@knights.ucf.edu');
});

