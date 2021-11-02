// Engineer constructor 
const Engineer = require('../lib/Engineer');

test('Engineer object', () => {
    const engineer = new Engineer('Gio', 101, 'gio.test@gmail.com', 'gioTester123');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('Pulls engineer information', () => {
    const engineer = new Engineer('Gio', 101, 'gio.test@gmail.com', 'gioTester123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    expect(engineer.getRole()).toEqual("Engineer");
});
