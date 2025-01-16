const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded());

const db = require('./db/database');

//const bodyParser = require('body-parser'); deprecato!

app.use(cors({origin: 'http://localhost:3000'}));

app.get("/api", (req, res) => {
    res.json('Ci sono! ti ascolto :-)');
});

app.get("/api/meetings", (req, res) => {
  //let sql = "SELECT titolo, descrizione, data_ora, date_format(data_ora,'%H:%i') AS orario, importante FROM appuntamenti";
  res.setHeader('Content-Type','text/html');

  let sql = "SELECT ID, U2.foto_profilo AS foto_profilo, appuntamenti.titolo AS titolo, appuntamenti.descrizione AS descrizione, appuntamenti.data_ora AS data_ora, date_format(appuntamenti.data_ora,'%H:%i') AS orario, appuntamenti.importante AS importante FROM utenti AS U1, appuntamenti, utenti AS U2 WHERE U1.email=appuntamenti.IDutente1 AND U2.email=appuntamenti.IDutente2 AND U1.email='mario.rossi@gmail.com'";
    db.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result); 
        }
      });   
})

app.delete('/api/meetings/delete/:id', (req, res) => {
  const id = req.params.id;
  let sql = `DELETE FROM appuntamenti WHERE id = ${id}`;  
  db.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
  })
});

//app.use(bodyParser.urlencoded({ extended: true })); //trasforma una sequenza di dati http 
//(querystring in caso di GET, l'elenco dei dati postati in caso di POST) in oggetto json
//deprecato!

app.post('/api/meetings/add', (req, res) => {
  //i dati contenuti nel payload inviato come secondo parametro del metodo post di axios 
  //essendo trasportati nel body della request si recuperano in modo trasparente in req.body
  const emailContatto = req.body.contatto;
  const titolo = req.body.titolo;
  const descrizione = req.body.descrizione;
  const dataOra = req.body.dataOra; //'2000-12-12 09:30';
  const importante = req.body.importante;
  let sql = `INSERT INTO appuntamenti(IDutente1,IDutente2,titolo,descrizione,data_ora,importante) 
  VALUES ('mario.rossi@gmail.com','${emailContatto}','${titolo}','${descrizione}','${dataOra}',${importante})`;
  db.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json('Nuovo appuntamento aggiunto con successo!');
      //console.log(result);
    }
  })
});

app.listen(3001, () => {
    console.log('Server backend active ON port 3001!');
});