const Engineer = require('../dist/Engineer')


test('test if we can get the construtor values for the engineer object', () => {
    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com", 'ScrimFS')

    expect(engineer.name).toBe('Dylan');
    expect(engineer.id).toBe('19');
    expect(engineer.email).toBe('Myemail@gmail.com');
    expect(engineer.github).toBe('ScrimFS')
});

test('test if we can get the name from the getName() method', () => {
    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com, ScrimFS")

    expect(engineer.getName()).toBe('Dylan');
});

test('test if we can get the id from the getId() method', () => {
    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com, ScrimFS")

   expect(engineer.getId()).toBe('19'); 
});

test('test if we can get the email from the getEmail() method', () => {
    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com")

    
    expect(engineer.getEmail()).toBe('Myemail@gmail.com');
});

test("test if we can get the github from the getGithub() method", () =>{
    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com", "ScrimFS")

    expect(engineer.getGithub()).toBe('ScrimFS');
});

test('test if we can get the role from the getRole method', () => {

    const engineer = new Engineer("Dylan", "19", "Myemail@gmail.com, ScrimFS")

    
    expect(engineer.getRole()).toBe('Engineer');
});