# Passo a Passo de como preparar o ambiente para o Projeto

## 1. Clone o repositório (https://github.com/GuilhermeAlves99/TesteTecnico);
_________________________________________________________________________________________________________________________________________
## 2. Instale as dependencias em "../TesteTecnicoAPI":
  ### - Abra o prompt de comando em TesteTecnicoAPI;
  ### - digite dotnet restore;
  ### - digite dotnet run;
  ### - cheque a porta em que o backend está sendo executado;
_________________________________________________________________________________________________________________________________________
## 3.  Instale as dependencias em "../pessoas-front":
  ### - Abra o prompt e digite "npm install";
  ### - Em seguida digite "ng serve" para rodar o front;
_________________________________________________________________________________________________________________________________________
## 4. caso o front esteja respondendo com um erro:
  ### - abra o projeto "pessoas-front"
  ### - vá na pasta environments (pessoas-front > src > environment > environments.ts)
  ### - confira se a rota mostrada nessa pasta (ex: http://localhost:5000/api) é a mesma rota mostrada no terminal ao executar o backend
   _________________________________________________________________________________________________________________________________________
