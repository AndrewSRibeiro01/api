const fs = require('fs');

const db = JSON.parse(fs.readFileSync("livros.json"))

const getTodosLivros = () => {
    return db
}

const getLivroPorId = (id) => {
    const livroFiltrado = db.filter(livro => livro.id === id)[0];
    return livroFiltrado
}

const insereLivro = (livroNovo) => {
    const novaListaDeLivros = [...db, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

const modificaLivro = (modificacoes, id) => {
    const indiceModificado = db.findIndex(livro => livro.id === id);

    const conteudoMudado = { ...db[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(db));

}

const deletaLivro = (id) => {
    const livrosFiltrados = db.filter(livro => livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}