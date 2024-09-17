const database = "BD3-GUILHERME-AULA";

const collection = "Livraria";

use(database);

/*CRESCENTE*/
db[collection]
  .find({
    autor: "J.R.R Tolkien",
  })
  .sort({ valor: 1 });

/*DECRESCENTE*/
db[collection]
  .find({
    autor: "J.R.R Tolkien",
  })
  .sort({ valor: -1 });
