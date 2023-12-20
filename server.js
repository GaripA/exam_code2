import express from 'express';
import Vocabulaire from './models/vocabulaire.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
        const min1 = 1 ;
       const max1 = 4 ;
app.use(express.static('public'));
function entierAleatoire(min1, max1)
        {
            return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
        }
        
        let a = entierAleatoire(min1,max1) ;
  app.post("/check", async function (req, res) {
  const contenu = await Vocabulaire.loadMany();
  const user = req.body.anglais;
  const correct = req.body.correct;

  let message = "";

  if (user.toLowerCase() === correct.toLowerCase()) {
      message = "Correct!";
  } else {
      message = "Incorrect!";
  }
  
  res.redirect('/');
});

app.get("/", async function (req, res) {
  const contenu = await Vocabulaire.loadMany();
  let messsage = "";
      
  res.render('Test.ejs', {contenu,a});
});
app.get("/delete/:id", async function (req, res) {
  await Vocabulaire.delete({ id: req.params.id });
  res.redirect('/');
});
app.post("/add", async function (req, res) {
  //le premier task est la variable créée au dessus, le seond designe la collonne
  
 
  const contenu = new Vocabulaire();
  contenu.anglais= req.body.anglais;
  
  contenu.français = req.body.français;

  await contenu.save();
  res.redirect('/');
});


const port = 5000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

/*app.get("/", async function (req, res) {
  const tasks = await Task.loadMany({bougth : 0 });
  const owned = await Task.loadMany({bougth: 1 });
  res.render('listTasks.ejs', {tasks,owned});
});*/

/*cd C:\Users\PC\Desktop\codeexoexam\LW3L-orm*/
// git init
// git remote add origin https:vyvu
// git remote -v
// git add .
// git commit -m "premier commit"
// git branch -M main
// git push -u origin main
/*#!/bin/bash

# Emplacement de sauvegarde
BACKUP_DIR="/var/backups/db_shopping"

# Fichier de journal
LOG_FILE="$BACKUP_DIR/db_backup.log"

# Date et heure actuelles
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Nom du fichier de sauvegarde
BACKUP_FILE="db_backup_$TIMESTAMP.sql"

# Informations de connexion à la base de données
DB_USER="votre_utilisateur_db"
DB_PASSWORD="votre_mot_de_passe_db"
DB_NAME="nom_de_votre_base_de_donnees"

# Commande de sauvegarde
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > "$BACKUP_DIR/$BACKUP_FILE"

# Enregistrement de l'heure dans le fichier de journal
echo "Sauvegarde effectuée le $TIMESTAMP" >> "$LOG_FILE"
*/
/*app.post("/add", async function (req, res) {
  
  //le premier task est la variable créée au dessus, le seond designe la collonne
  

const contenu = await Vocabulaire.loadMany();

 
  const task= new Task();
  task.price= req.body.anglais
  task.size= req.body.size
  task.brand = req.body.brand
  task.bougth= 0 ;
  await task.save();
  res.redirect('/');
});*/
