const { Router } = require("express");
const { getLivros, postLivros, patchLivros, deleteLivros, getLivro } = require("../controladores/livro");

const router = Router();

router
    .get('/', getLivros)
    .get('/:id', getLivro)
    .post('/', postLivros)
    .patch('/:id', patchLivros)
    .delete('/:id', deleteLivros)

module.exports = router;