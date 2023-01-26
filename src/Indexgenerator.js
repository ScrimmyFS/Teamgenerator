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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./lib/style.css">
    <title>Team Page</title>
</head>

<header class="header"><p>Our Team</p></header>

<body class="Teambox">
${cardgenerator(staffmemberdata)}
</body>
`
}

function cardgenerator(staffmemberdata) {
    // Loop threw my array of each member of the array create a card. creat a for loop and return this string. ${staffmemeberdata} console.log(staffmemberdata) Need to generate a function in each class for when building  

    
    
    
    for (var i = 0; i < staffmemberdata.length; i++) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${staffmemberdata[i].getName()}
    </div>
    <ul class="list-group list-group-flush">
    ${staffmemberdata[i].rendercardcontents()}
    </ul>
  </div>
    `
    }



    console.log(staffmemberdata)
}




module.exports = Indexgenerator;