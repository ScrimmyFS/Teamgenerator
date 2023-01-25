const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool () {
        return this.school
    }

    rendercardcontents(){
        return `<p>${this.getRole()}</p> 
                <p>${this.id}</p>
                <p>${this.school}</p>`
     }
}

module.exports = Intern