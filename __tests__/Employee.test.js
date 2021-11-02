const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('Pulls employee information', () => {
    const employee = new Employee('Gio', 101, 'gio.test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getRole()).toEqual("Employee");
});
