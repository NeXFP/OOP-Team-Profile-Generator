const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('Pulls employee name', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('Pulls employee ID', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('Pulls employee email', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Pulls role of employees', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 