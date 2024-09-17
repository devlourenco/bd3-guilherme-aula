const database = "BD3-GUILHERME-AULA";

const collection = "Livraria";

use(database);

/*SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO NUMERO great then*/
db[collection].find({ 
    valor: { $gt: 125 } 
});

/*SELECIONA O LIVRO COM MENOR VALOR little then*/
db[collection].find({ 
    valor: { $lt: 100 } 
});


