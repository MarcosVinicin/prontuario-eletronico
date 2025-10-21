console.log('Script Carregado')
const Formulario = document.getElementById('TextoFormulario');

Formulario.addEventListener('submit', async function(event){

    event.preventDefault();

     const nome = document.getElementById('NomePaciente').value
     const Telefone = document.getElementById('Telefone').value
     const DataNascimento = document.getElementById('DataNascimento').value
     const Queixa = document.getElementById('Queixa').value
     const Medicamentos = document.getElementById('Medicamentos').value
     const Diagnostico = document.getElementById('Diagnostico').value
     const Conduta = document.getElementById('Conduta').value

    

     const Prontuario = {
    id: Date.now(),
     Paciente: {
        nome: nome,
        Telefone: Telefone,
        DataNascimento: DataNascimento
     },
     Reclamacoes:{
        Queixa: Queixa,
        Medicamentos: Medicamentos,
     },
     Plano:{
        Diagnostico: Diagnostico,
        Conduta: Conduta
     }

}

try{
   const resposta = await fetch('http://localhost:3000/api/prontuarios',{
      method:'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body:JSON.stringify(Prontuario)
   });

   const data = await resposta.json();
   alert(data.message || 'prontuario enviado com sucesso!')
}catch(erro){
   console.error('Erro ao enviar Prontuario',erro);
   alert('Erro ao conectar com o servidor');
}

const ChaveDeAcesso = 'ProntuariosDeAcesso';
let ListaProntuario = JSON.parse(localStorage.getItem(Prontuario)||'[]');

ListaProntuario.push(Prontuario);

localStorage.setItem(ChaveDeAcesso, JSON.stringify(ListaProntuario));
alert("Prontuario Salvo com Sucesso!!!");
Formulario.reset();
})


