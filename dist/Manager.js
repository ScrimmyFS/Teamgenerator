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
        return  this.officeNumber
    }


    rendercardcontents(){
        return `<li class="list-group-item">"Role: ${this.getRole()}"</li> 
                <li class="list-group-item">"ID: ${this.id}"</li>
                <li class="list-group-item">"Email: ${this.email}"</li>
                <li class="list-group-item">'Office number: ${this.officeNumber}'</li>`
     }
}


module.exports = Manager