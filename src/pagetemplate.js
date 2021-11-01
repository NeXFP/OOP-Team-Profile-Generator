//Creates the card for the manager
const managerGeneration = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-info mb-3" style="width: 20rem;">
            <div class="card-header bg-secondary">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="card-text-right">ID: ${manager.id}</p>
                <p class="card-text-right">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text-right">Office Number: ${manager.officeNumber}</p>
                <p class="btn btn-secondary">Github: <a href="https://github.com/${manager.github}">${manager.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//Creates the card for the engineer
const engineerGeneration = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-info mb-3" style="width: 20rem;">
            <div class="card-header bg-secondary">
                <h3>${engineer.name}</h3>
                <h4>Manager</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="card-text-right">ID: ${engineer.id}</p>
                <p class="card-text-right">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="card-text-right">Office Number: ${engineer.officeNumber}</p>
                <p class="btn btn-secondary">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//Creates the card for the intern
const internGeneration = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-info mb-3" style="width: 20rem;">
            <div class="card-header bg-secondary">
                <h3>${intern.name}</h3>
                <h4>Manager</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="card-text-right">ID: ${intern.id}</p>
                <p class="card-text-right">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text-right">Office Number: ${intern.officeNumber}</p>
                <p class="btn btn-secondary">Github: <a href="https://github.com/${intern.github}">${intern.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

generateIndex = (data) => {
    pageArray = [];

    for(let i = 0; i< data.length; i++){
        const role = employee.getRole();
    }

    if (role === "Manager") {
        const managerCard = managerGeneration(employee);

        pageArray.push(managerCard);
    }

    if (role === "Engineer") {
        const engineerCard = engineerGeneration(employee);

        pageArray.push(engineerCard);
    }

    if (role === "Intern") {
        const internCard = internGeneration(employee);

        pageArray.push(internCard);
    }

}

const employeeCards = pageArray.join('')

const generateTeam = teamComposition(employeeCards);
return generateTeam;

function teamComposition(employeeCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>

<body>
    <header class="jumbotron">
        <h1 class="text-center">My Team</h1>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = generateIndex;