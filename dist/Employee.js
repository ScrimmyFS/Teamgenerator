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
    return 'Id: ${this.id}'
}


getEmail() {
    return 'Email ${this.email}'
}


getRole() {
    return 'Employee'
}

rendercardcontents(){
    return `<li class="list-group-item">"Role: ${this.getRole()}"</li>
    <li class="list-group-item">"ID: ${this.id}"</li>
    <li class="list-group-item">"Email: ${this.email}"</li>
    <li class="list-group-item">"Github: ${this.github}"</li>`
 }
}


module.exports =  Employee