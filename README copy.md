## Tecnologias Utilizadas
Este projeto utiliza as seguintes tecnologias:
- [Node.js](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HTMX](https://htmx.org/docs/)
- [Alpine.js](https://alpinejs.dev.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)


## Dependências
Este projeto possui as seguintes dependências:

### Dependências
- `cheerio`: ^1.0.0
- `cors`: ^2.8.5
- `date-fns`: ^4.1.0
- `express`: *
- `sequelize`: ^6.37.3
- `sqlite3`: ^5.1.7


## Para iniciar o projeto

1. **Instale as dependências (caso baixe o projeto)**:
    ```bash
    npm install
    ```

2. **Execute o servidor**:
    ```bash
    npm run start
    ```

3. **Caso altere algo no arquivo css deve-se executar o CLI do tailwindcss**:
   ```bash
   npx tailwindcss -i ./css/inp.css -o ./css/out.css --watch
   ```

## Uso
Uma vez que o servidor está em execução, você pode acessar a aplicação em [http://localhost:8080](http://localhost:8080). Aqui estão algumas funcionalidades que você pode explorar:

- [Listar pessoas](#)
- [Adicionar pessoas](#)
- [Editar pessoas](#)
- [Excluir pessoas](#)
