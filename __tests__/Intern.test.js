//intern constructor
const Intern = require('../lib/Intern');


test('Intern object', () => {
    const intern = new Intern('Gio', 101, 'gio.test@gmail.com', 'Rutgers');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('Pulls intern information', () => {
    const intern = new Intern('Gio', 101, 'gio.test@gmail.com', 'Rutgers');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    expect(intern.getRole()).toEqual("Intern");
});
