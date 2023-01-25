const inquirer = require('inquirer');
const fs = require('fs');

const teamgenerator = require('./src/Indexgenerator');

const Employee = require('./dist/Employee')
const Engineer = require('./dist/Engineer')
const Manager = require('./dist/Manager')
const Intern = require('./dist/Intern')

staffmemberdata = []


const questions = [
    {
        type: "Input",
        message: "What is your managers name?",
        name: "name",
    }, {
        type: "Input",
        message: "What is your manager's ID",
        name: "id",
    }, {
        type: "Input",
        message: "What is your manager's email",
        name: "email",
    }, {
        type: "Input",
        message: "Where is your manager's office?",
        name: "office",
    }, {
        type: "list",
        message: "Which type of team of team member would you like to add?",
        name: "NewMember",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }
]





const Engineeranswers = [
    {
        type: "Input",
        message: "What is your engineer's name?",
        name: "name",
    }, {
        type: "Input",
        message: "What is your engineer's ID",
        name: "id",
    }, {
        type: "Input",
        message: "What is your engineer's email",
        name: "email",
    }, {
        type: "input",
        message: "What is your GIThub username?",
        name: "Github",
    }, {
        type: "list",
        message: "Which type of team of team member would you like to add?",
        name: "NewMember",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }]







const Internanswers =
    [{
        type: "Input",
        message: "What University did you go to?",
        name: "School",
    }, {
        type: "Input",
        message: "What is your Intern's name?",
        name: "name",
    }, {
        type: "Input",
        message: "What is your Intern's ID",
        name: "id",
    }, {
        type: "Input",
        message: "What is your Intern's email",
        name: "email",
    }, {
        type: "list",
        message: "Which type of team of team member would you like to add?",
        name: "NewMember",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }]

function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success!")
        }
    })

}

function promptInternQuestions() {
    inquirer.prompt(Internanswers)
        .then(function (data) {
            const newIntern = new Intern(
                data.name,
                data.id,
                data.email,
                data.School
            )

            staffmemberdata.push(newIntern)

            if (data.NewMember == "Intern") {
                promptInternQuestions()
            }
            else if (data.NewMember == "Engineer") {
                promptEngineerQuestions()
            }
            else {
                writeToFile("Index.HTML", teamgenerator(staffmemberdata));
                // console.log(staffmemberdata)
            }
        })
}
function promptEngineerQuestions() {
    inquirer.prompt(Engineeranswers)
        .then(function (data) {
            const newEngineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.Github
            )

            staffmemberdata.push(newEngineer)

            if (data.NewMember == "Intern") {
                promptInternQuestions()
            }
            else if (data.NewMember == "Engineer") {
                promptEngineerQuestions()
            }
            else {
                writeToFile("Index.HTML", teamgenerator(staffmemberdata));
                // console.log(staffmemberdata)
            }
        })
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            const newManager = new Manager(
                data.name,
                data.id,
                data.email,
                data.office
            )

            staffmemberdata.push(newManager)

            if (data.NewMember == "Intern") {
                promptInternQuestions()
            }
            else if (data.NewMember == "Engineer") {
                promptEngineerQuestions()
            }
            else {
                writeToFile("Index.HTML", teamgenerator(staffmemberdata));
                // console.log(staffmemberdata)
            }
        })
}

init();

