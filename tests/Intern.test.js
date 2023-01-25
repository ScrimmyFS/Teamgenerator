const Intern = require('../dist/Intern')


test('test if we can get the construtor values for the intern object', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

    expect(intern.name).toBe('Dylan');
    expect(intern.id).toBe('19');
    expect(intern.email).toBe('Myemail@gmail.com');
    expect(intern.school).toBe('Fairport')
    
});

test('test if we can get the name from the getName() method', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

    expect(intern.getName()).toBe('Dylan');
});

test('test if we can get the id from the getId() method', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

   expect(intern.getId()).toBe('19'); 
});

test('test if we can get the email from the getEmail() method', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

    expect(intern.getEmail()).toBe('Myemail@gmail.com');
});

test('test if we can get the school from the getSchool() method', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

    expect(intern.getSchool()).toBe('Fairport');
});

test('test if we can get the role from the getRole method', () => {
    const intern = new Intern("Dylan", "19", "Myemail@gmail.com", "Fairport")

    expect(intern.getRole()).toBe('Intern');
});