const database = "BD3-GUILHERME-AULA";

const collection = "Livraria";

use(database);

/*SELECIONA O LIVRO MAIOR OU IGUAL A DETERMINADO NUMERO greate then equal */
db[collection].find({ 
    valor: { $gte: 100, $lte:150 } 
});
