# 🏥 Prontuário Eletrônico de Enfermagem para Pessoas Trans

Este projeto tem como objetivo facilitar o **registro digital de informações de saúde e acompanhamento de pacientes trans**, proporcionando um ambiente mais inclusivo, acessível e organizado para profissionais de enfermagem.

## 💡 Sobre o Projeto

O sistema foi desenvolvido em **HTML, CSS e JavaScript**, com integração a uma **API REST (Node.js)**.  
Ele permite o cadastro de prontuários contendo dados pessoais, queixas principais, medicamentos em uso, diagnóstico e conduta de enfermagem.

A aplicação foi pensada para ser simples, rápida e responsiva, oferecendo um formulário intuitivo para que profissionais da área possam registrar e acompanhar informações de forma segura.

## ⚙️ Funcionalidades

- Coleta de dados de identificação (nome social, telefone, data de nascimento e identidade de gênero)  
- Registro da queixa principal e medicamentos em uso  
- Campos para diagnóstico e conduta de enfermagem  
- Envio automático dos dados para uma API local (`http://localhost:3000/api/prontuarios`)  
- Mensagens de sucesso ou erro de conexão  
- Estrutura preparada para integração futura com servidores online (ex: **Render**)

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura do formulário  
- **CSS3** — Estilização e layout  
- **JavaScript (ES6+)** — Lógica de coleta e envio dos dados  
- **Node.js / Express (API)** — Backend para armazenamento dos prontuários  

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/MarcosVinicin/prontuario-eletronico
