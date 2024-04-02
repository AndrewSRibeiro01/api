const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require('../servicos/livro');

const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros()
        res.send(livros);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getLivro = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro);
        } else {
            res.status(422).send("Id invalido");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const postLivros = (req, res) => {
    try {
        const livroNovo = req.body

        if (req.body.nome && req.body.id) {
            insereLivro(livroNovo)
            res.status(201).send("Livro inserido com sucesso");
        } else if (!req.body.nome) {
            res.status(422).send("Campo nome é obrigatório");
        } else {
            res.status(422).send("Campo id é obrigatório");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const patchLivros = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body

            modificaLivro(body, id)
            res.send("Item modificado com sucesso");
        } else {
            res.status(422).send("Id invalido");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteLivros = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivro(id)
            res.send("Item deletado com sucesso");
        } else {
            res.status(422).send("Id invalido")
        }

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
