+-----------------------+
| Front-end Siorg React |
+ ----------------------+

-----------------------------------
Subir o ambiente de desenvolvimento
-----------------------------------

Instale os pacotes do Node:
npm i

Suba o servidor http://localhost:3000 de desenvolvimento:
npm start

A aplicação assume que o Siorg está rodando em http://localhost:8080.

---------------
Gerar uma build
---------------

Gerar o diretório com os arquivos de build:
npm run build

O diretório de build deve ser copiado para:
workspace/novosiorg/siorg-gestao/siorg-gestao-webapp/src/main/webapp/public/

Gere novamente o .war do Gestão WebApp.
