const { response } = require("express")
const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const { user_id } = request.params;

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id
    })

    const linksIsert = links.map(links => {
      return {
        note_id,
        url: links
      }
    });
    await knex("links").insert(linksIsert);

    const tagsIsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    await knex("tags").insert(tagsIsert);

    response.json();

}
}
module.exports = NotesController;