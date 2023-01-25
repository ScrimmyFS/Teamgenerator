const Employee = require('./Employee')

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github

    }

    getRole(){
        return 'Engineer'}

    getGithub(){
        return this.github
    }

    rendercardcontents(){
       return `
               <p>${this.getRole()}</p> 
               <p>${this.id}</p>
               <p>${this.email}</p>
               <p>${this.github}</p>`
    }

}

module.exports = Engineer;