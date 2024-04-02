const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require('../servicos/livro');

const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros()
        res.sendStatus(livros);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getLivro = (req, res) => {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const postLivros = (req, res) => {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)

        res.status(201).send("Livro inserido com sucesso");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const patchLivros = (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.send("Item modificado com sucesso");

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteLivros = (req, res) => {
    try {
        const id = req.params.id
        deletaLivro(id)
        res.send("Item deletado com sucesso");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivros,
    patchLivros,
    deleteLivros
}
