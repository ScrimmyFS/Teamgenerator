const Manager = require('../dist/Manager')


test('test if we can get the construtor values for the manager object', () => {
    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")
    
    expect(manager.name).toBe('Dylan');
    expect(manager.id).toBe('19');
    expect(manager.email).toBe('Myemail@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('test if we can get the name from the getName() method', () => {
    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")

    expect(manager.getName()).toBe('Dylan');
});

test('test if we can get the id from the getId() method', () => {
    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")

   expect(manager.getId()).toBe('19'); 
});

test('test if we can get the email from the getEmail() method', () => {
    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")

    expect(manager.getEmail()).toBe('Myemail@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {

    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")

    expect(manager.getOfficeNumber()).toBe('123');
});

test('test if we can get the role from the getRole method', () => {
    const manager = new Manager("Dylan", "19", "Myemail@gmail.com", "123")

    expect(manager.getRole()).toBe('Manager');
});