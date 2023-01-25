const Employee = require('../dist/Employee')


test('test if we can get the construtor values for the employee object', () => {
    const employee = new Employee("Dylan", "19", "Myemail@gmail.com")

    expect(employee.name).toBe('Dylan');
    expect(employee.id).toBe('19');
    expect(employee.email).toBe('Myemail@gmail.com');
    
});

test('test if we can get the name from the getName() method', () => {
    const employee = new Employee("Dylan", "19", "Myemail@gmail.com")
    expect(employee.getName()).toBe('Dylan');
});

test('test if we can get the id from the getId() method', () => {
    const employee = new Employee("Dylan", "19", "Myemail@gmail.com")

   expect(employee.getId()).toBe('19'); 
});

test('test if we can get the email from the getEmail() method', () => {
    const employee = new Employee("Dylan", "19", "Myemail@gmail.com")

    expect(employee.getEmail()).toBe('Myemail@gmail.com');
});

test('test if we can get the role from the getRole method', () => {
    const employee = new Employee("Dylan", "19", "Myemail@gmail.com")

    expect(employee.getRole()).toBe('Employee');
});