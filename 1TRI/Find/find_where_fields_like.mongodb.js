const database = 'BD3-GUILHERME-AULA';
const collection = 'LIVRARIA';

use(database);

/* TODOS OS REGISTROS DA COLEÇÃO DE DADOS */
db[collection].find (
    {"descricao":/é/i},
    {"_id": 0, "codigo":0}

)