const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school
    }

    rendercardcontents() {
        return `<li class="list-group-item">"Role: ${this.getRole()}"</li> 
                <li class="list-group-item">"ID: ${this.id}"</li>
                <li class="list-group-item">"Email: ${this.email}"</li>
                <li class="list-group-item">"University: ${this.school}"</li>`
    }
}

module.exports = Intern