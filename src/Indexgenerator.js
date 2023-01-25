// have to make a loop for cards


const Employee = require("../dist/Employee")
const Engineer = require("../dist/Engineer")
const Intern = require("../dist/Intern")
const Manager = require("../dist/Manager")


function Indexgenerator(staffmemberdata) {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href=".lib/style.css">
    <title>Team Page</title>
</head>
<body>
${cardgenerator(staffmemberdata)}
</body>
`
}

function cardgenerator(staffmemberdata) {
    // Loop threw my array of each member of the array create a card. creat a for loop and return this string. ${staffmemeberdata} console.log(staffmemberdata) Need to generate a function in each class for when building  

    console.log(staffmemberdata)


    for (var i = 0; i < staffmemberdata.length; i++) {
        console.log(staffmemberdata[i])

    return `
        <div class="col s12 m7">
            <h2 class="header">${staffmemberdata[i].getName()}</h2>
            <div class="card horizontal">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    ${staffmemberdata[i].rendercardcontents()}
                </div>
            </div>
        </div>`
    }



    console.log(staffmemberdata)
}




module.exports = Indexgenerator;