class Employee{
    constructor(name, id, email)
    {
    this.name = name
    this.id = id
    this.email = email
    }


getName() {
    return this.name
}

getId() {
    return this.id
}


getEmail() {
    return this.email
}


getRole() {
    return 'Employee'
}

rendercardcontents(){
    return `<p>${this.getRole()}</p> 
            <p>${this.id}</p>
            <p>${this.email}</p>
            <p>${this.github}</p>`
 }
}


module.exports =  Employee