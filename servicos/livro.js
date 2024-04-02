const fs = require('fs');

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("livros.json"));
}

const getLivroPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livroFiltrado = livros.filter(livro => livro.id === id)[0];
    return livroFiltrado
}

const insereLivro = (livroNovo) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

const modificaLivro = (modificacoes, id) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));

}

const deletaLivro = (id) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.findIndex(livro => livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado));
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}