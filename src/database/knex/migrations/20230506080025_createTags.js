exports.up = knex => knex.schema.createTable("tags", table =>{
  table.increments("id");
  table.text("name").notNullable();

  table.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE");// criando um tabela de numero interio com referencia ao id que existe dentro da tabela do usuario
  table.integer("user_id").references("id").inTable("users");
});
  
exports.down = knex => knex.schema.dropTable("notes");
