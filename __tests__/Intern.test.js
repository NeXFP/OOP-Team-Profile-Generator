//intern constructor
const Intern = require('../lib/Intern');


test('Intern object', () => {
    const intern = new Intern('Gio', 101, 'gio.test@gmail.com', 'Rutgers');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('Pulls employee school', () => {
    const intern = new Intern('Gio', 101, 'gio.test@gmail.com', 'Rutgers');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Pulls role of employee', () => {
    const intern = new Intern('Gio', 101, 'gio.test@gmail.com', 'Rutgers');

    expect(intern.getRole()).toEqual("Intern");
}); 