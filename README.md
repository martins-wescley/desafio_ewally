# desafio_ewally

## Instalação e execução da aplicação

1. Clonar o projeto
2. Na pasta do projeto, executar o comando "npm install", para instalar as dependências do projeto
3. Iniciar o servidor nodejs da api que será testada
4. Executar o comando "npm test" para inicar a execução dos testes

# BUGS
1. Visualizar os BUGS criados no documento BugsDesafio.xlsx

# Melhorias
1. Visualizar as sugestões de melhoria no documento Melhorias.xlsx

# Observações Gerais
1. A API não cumpri todos os critérios de aceite
    - [x] Ao consultar uma linha digitável devo ter o retorno se a linha é válida ou não
    - [x] A API deve consultar boletos de títulos bancários e de pagamento de concessionárias
    - [x] Caso o boleto possua data de vencimento este campo deve ser exibido no retorno da consulta, caso não tenha o campo não deve ser exibido
    - [ ] Caso o boleto possua valor este campo deve ser exibido no retorno da consulta, caso não tenha o campo não deve ser exibido
    - [ ] A linha digitável pode aceitar qualquer caracter
    - [x] O campo com o código de barras deve ser sempre exibido no retorno da consulta
