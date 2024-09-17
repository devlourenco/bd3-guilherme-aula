const database = 'BD3-GUILHERME-AULA';
const collection = 'LIVRARIA';

use(database);

/*Altera os dados de um documento.*/
db[collection].updateMany(
    {autor:'J.R.R Tolkien'},
    {$set:{autor:'John Ronald Reuel Tolkien'}}
);