const database = 'BD3-GUILHERME-AULA';
const collection = 'LIVRARIA';

use(database);

/* TODOS OS REGISTROS DA COLEÇÃO DE DADOS */
db[collection].updateOne(
    {titulo: "As Cavernas de Aço"},
    {valor: "250"}
)