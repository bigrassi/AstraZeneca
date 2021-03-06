const path = require('path');
const fs = require('fs');

// check if file exists: fs.existsSync('/path/to/file')
/*
	Aggiungi un oggetto alla variabile "obj" qui sotto per aggiungere un entry point
	- chiave -> il nome del bundle che vogliamo ottenere
	(e che avrà la forma nomeBundle.bundle.js)
	- valore -> il percorso del file javascript sorgente
*/

const obj = {
	primo: path.join(path.resolve(__dirname, 'src/js'), 'ciao.js'),
	secondo: path.join(path.resolve(__dirname, 'src/js'), 'ehy.js'),
}

module.exports = obj
