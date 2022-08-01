// importe module express
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const manipulation = require('./base/api');
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost/api/sql' }));
app.use(express.static(path.join(__dirname, 'public')));


// obtient le chemin vers index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// obtient chemin vers backend.html
app.get('/backend', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'backend.html'));
});

// obtient chemin vers frontend.html
app.get('/frontend', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontend.html'));
});

// obtient chemin vers marketing.html
app.get('/marketingDigital', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'marketing.html'));
});

// obtient chemin vers uxui.html
app.get('/uxui', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uxui.html'));
});

// obtient chemin vers frontend.html
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// obtient chemin vers signup.html
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// poste les informations réçu par Client
app.post('/api/sql', (req, res) => {
    const utilisateur = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avis: req.body.avis,
        note: req.body.note,
        formation: req.body.formation
    };

    // insère donnée dans la base de donnée
    manipulation.sible(
        utilisateur.firstname,
        utilisateur.lastname,
        utilisateur.avis,
        parseInt(utilisateur.note),
        utilisateur.formation
    );
    console.log(utilisateur);
});

app.get("/index01", (req,res)=>{
    manipulation.index01(res);
    
})

app.get("/backend01", (req, res) =>{
    manipulation.backend01(res);
})

app.get("/frontend01", (req, res) =>{
    manipulation.frontend01(res);
})

app.get("/marketing01", (req, res) =>{
    manipulation.marketing01(res);
})

app.get("/uxui01", (req, res) =>{
    manipulation.uxui01(res);
})
// app écoute sur le port spécifié
app.listen(PORT, () => {console.log('Listening on port: ', PORT)});
