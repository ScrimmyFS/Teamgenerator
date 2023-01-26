const Employee = require('./Employee')

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github

    }

    getRole(){
        return 'Engineer'
    }

    getGithub(){
        return 'GitHub: ${this.github}'
    }

    rendercardcontents(){
       return `
       <li class="list-group-item">"Role: ${this.getRole()}"</li> 
       <li class="list-group-item">"ID: ${this.id}"</li>
       <li class="list-group-item">"Email: ${this.email}"</li>
       <li class="list-group-item">"GitHub: ${this.github}"</li>`
    }

}

module.exports = Engineer;