const express = require('express')
const rotaLivro = require('./routers/livro')

const app = express();

app.use(express.json());
app.use('/livros', rotaLivro);

const port = 8000;

app.listen(port, (req, res) => {
    console.log(`Escutando a porta ${port}`);
})