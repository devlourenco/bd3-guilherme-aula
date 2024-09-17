const database = "BD3-GUILHERME-AULA";

const collection = "Livraria";

use(database);


db[collection].find({
    $or: [
      { categoria: { $eq: "Fantasia Heroica" } },
       { valor: { $lte: 100 } }]
  });