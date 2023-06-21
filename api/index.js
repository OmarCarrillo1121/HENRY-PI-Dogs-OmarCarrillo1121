//* index.js
//? SE ENCARGA DE LEVANTAR EL SERVER Y PONERLO A ESCUCHAR
//!! conn SE ENCARGA DE CONECTAR CON DATABASE - INVESTIGAR

const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
