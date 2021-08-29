const Manager = require('../lib/manager');
// Testing a newly created employee
const managerTest = new Manager('Ryan', '01', 'rd3@knights.ucf.edu', '201');

test('to get values from constructor object', () => {
    expect(managerTest.name).toBe('Ryan');
    expect(managerTest.id).toBe('01');
    expect(managerTest.email).toBe('rd3@knights.ucf.edu');
    expect(managerTest.officeNo).toBe('201');
});

test('test if getOfficeNo() returns the office number', () => {
    expect(managerTest.getOfficeNo()).toBe('201');
});

test('test if getRole() returns the role', () => {
    expect(managerTest.getRole()).toBe('Manager');
});