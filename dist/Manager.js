const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber =  officeNumber
    }

    getRole(){
        return "Manager"
    }
    getOfficeNumber () {
        return this.officeNumber
    }


    rendercardcontents(){
        return `<p>${this.getRole()}</p> 
                <p>${this.id}</p>
                <p>${this.email}</p>
                <p>${this.officeNumber}</p>`
     }
}


module.exports = Manager