const database = "BD3-GUILHERME-AULA";

const collection = "Livraria";

use(database);

/*SELECIONA UM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINADO*/
db[collection].find({
  $and: [
    { categoria: { $eq: "Fantasia Heroica" } },
     { valor: { $lte: 100 } }]
});
