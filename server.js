const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 3000;


const dbConfig ={
    host:'sql10.freesqldatabase.com',
    user: 'sql10802675',
    password: 'WyaBci7xaY',
    database: 'sql10802675',
};

app.use(cors());
app.use(express.json());

let connection;

async function connectToDatabase() {
    try{
        console.log('Tentando conectar ao banco de dados SQL...');
        connection = await mysql.createConnection(dbConfig);
        console.log('✅ Conexão com o Banco de Dados SQL estabelecida com sucesso!')
    }catch (error){
        console.error('❌ ERRO AO CONECTAR AO BANCO DE DADOS:', error.message);
        process.exit(1);
    }
}

app.post('/api/prontuarios', async(req, res)=>{
    try{
        const {Paciente, Reclamacoes, Plano}=req.body;

        console.log('Dados recebidos',  req.body);

        const [rows] =await connection.execute(
            `
            INSERT INTO prontuarios (nome_paciente, data_nasc, queixa_principal, diagnostico, recomendacao)
            VALUES (?,?,?,?,?)
            `,
            [
                Paciente.nome,
                Paciente.DataNascimento,
                Reclamacoes.Queixa,
                Plano.Diagnostico,
                Plano.Conduta

            ]
        );
        res.status(200).send('Prontuario salvo com sucesso!')
    }
    catch (error) {
        console.error('Erro ao salvar prontuário:', error);
        res.status(500).json({ error: 'Falha interna ao salvar no banco de dados.' });
    }
})

app.get('/api/prontuarios', async (req, res) => {
    
    try {
        console.log('RECEBIDO');

        const [rows] = await connection.execute('SELECT * FROM prontuarios');
        console.log('Dados Retornados: ', rows)
        res.json(rows);


    } catch (error) {
        console.error('Erro ao buscar prontuários:', error);
        res.status(500).json({ error: 'Falha interna ao listar no banco de dados.' });
    }
});



connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`\nServidor Express rodando em: http://localhost:${PORT}`);
        console.log('Agora ligue o seu HTML/JS para enviar dados para esta URL.');
    });
});