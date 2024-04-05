const express = require('express')
const cors = require('cors');
const rotaLivro = require('./routers/livro')

const app = express();

app.use(express.json(), cors());
app.use('/livros', rotaLivro);

const port = 8000;

app.listen(port, (req, res) => {
    console.log(`Rodando na porta ${port}`);
})