module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    /**
     * @description Create a new Note
     */
    app.post('/notes', notes.create);

    /**
    * @description Retrieve all Notes
    */
    app.get('/notes', notes.findAll);

    /**
     * @description Retrieve a single Note with noteId
     */
    app.get('/notes/:noteId', notes.findOne);

    /**
     * @description Update a Note with noteId
     */
    app.put('/notes/:noteId', notes.update);

    /**
    * @description Delete a Note with noteId
    */
    app.delete('/notes/:noteId', notes.delete);
}