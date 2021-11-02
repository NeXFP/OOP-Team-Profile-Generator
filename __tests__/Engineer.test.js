// Engineer constructor 
const Engineer = require('../lib/Engineer');

test('Engineer object', () => {
    const engineer = new Engineer('Gio', 101, 'gio.test@gmail.com', 'gioTester123');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('Pulls engineer github', () => {
    const engineer = new Engineer('Gio', 101, 'gio.test@gmail.com', 'gioTester123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('Pulls role of employee', () => {
    const engineer = new Engineer('Gio', 101, 'gio.test@gmail.com', 'gioTester123');

    expect(engineer.getRole()).toEqual("Engineer");
});