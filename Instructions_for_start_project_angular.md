# Instruções para iniciar um projeto Angular

Siga os passos abaixo para criar e rodar um novo projeto Angular neste workspace.

## 1. Instale o Angular CLI (caso ainda não tenha)

```sh
npm install -g @angular/cli
```

## 2. Crie um novo projeto Angular

Escolha um nome para o projeto (exemplo: `meu-projeto-angular`):

```sh
ng new meu-projeto-angular
```

Siga as instruções interativas para configurar o projeto conforme sua preferência.

## 3. Acesse a pasta do projeto

```sh
cd meu-projeto-angular
```

## 4. Rode o servidor de desenvolvimento

```sh
ng serve
```

O Angular irá iniciar o servidor localmente, normalmente em http://localhost:4200.

## 5. Acesse a aplicação no navegador

No terminal, execute:

```sh
$BROWSER http://localhost:4200
```

Assim, a aplicação será aberta no navegador padrão do host.

---

**Observação:**  
Certifique-se de que o Node.js e o npm estão instalados no ambiente. Para verificar, execute:

```sh
node -v
npm -v
```

Se precisar instalar, utilize:

```sh
sudo apt update
sudo apt install nodejs npm
```