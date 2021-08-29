const app = require('../app');

const createTeamProfile = (team) => {
    const html = [];

    const createManagerHTML = manager => {

    }

    const createEngineerHTML = engineer => {

    }

    const createInternHTML = intern => {
        
    }
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../assets/style.css">
        <title>Team Profile</title>
    </head>

    <body>
        <header>
            <h1> My Team </h1>
        </header>
        
        <main>${createTeamProfile(team)}</main>

        <script src="js/scripts.js"></script>
    </body>

    </html>`
}