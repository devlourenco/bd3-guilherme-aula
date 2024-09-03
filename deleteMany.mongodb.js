const database = "BD3-GUILHERME-AULA";
const collection = "LIVRARIA";

use(database);

db[collection].updateMany({ autor: "Isaac Asimov" });
