// importe module
const mysql = require('mysql');
require('dotenv').config()

const database = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE
});
console.log(process.env)    

// essaie de connecter la base de donnée
database.connect((error) => {
    if (error) throw error;
    console.log('Database connected...');
});

function sible(firstname, lastname, avis, note, formation) {
    let espace = {
        firstname,
        lastname,
        avis,
        note,
        formation
    };

    database.query('INSERT INTO contact SET ?', espace, (error, result) => {
        if (error) throw error;
        console.log('Values inserted...');
    });

}


function backend01(resultat){
    database.query('SELECT * FROM contact WHERE formation = "backend"', (error, result) => {
        if (error) throw error;
        resultat.json(result);
    })
}



function index01(resultat){
    database.query('SELECT * FROM contact order by note desc', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function frontend01(resultat){
    database.query('SELECT * FROM contact WHERE formation="Frontend"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function marketing01(resultat){
    database.query('SELECT * FROM contact WHERE formation = "Marketing-Digital"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function uxui01(resultat){
    database.query('SELECT * FROM contact WHERE formation = "ux-ui"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}


module.exports = {
    sible,
    index01,
    backend01,
    frontend01,
    marketing01,
    uxui01
   
};
