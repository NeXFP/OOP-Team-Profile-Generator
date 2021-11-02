const Manager = require('../lib/Manager');


test('Manager object', () => {
    const manager = new Manager('Gio', 101, 'gio.test@gmail.com', 123-456-7890);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('Pulls role of employee', () => {
    const manager = new Manager('Gio', 101, 'gio.test@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 