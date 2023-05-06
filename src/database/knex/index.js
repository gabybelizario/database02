// essas configuraçoes sao para conectar o knex com o banco de dados

const config = require("../../../kenexfile");
const knex = require("knex");

const connection = knex(config.development);

module.exports = connection