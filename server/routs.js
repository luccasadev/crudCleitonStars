import imports from './imports.js';

export const routs = (app) => {

  // Funções de tratamento de erro

  const handleNotFound = (res, message) => {
    res.status(404).send({ error: message });
  };

  const handleBadRequest = (res, message) => {
    res.status(400).send({ error: message });
  };

  const handleInternalError = (res, message) => {
    res.status(500).send({ error: message });
  };


  // // Função para formatar as datas
  // const formatUserDates = (user) => ({
  //   ...user.dataValues, // Acessando dataValues
  //   createdAt: imports.format(new Date(user.createdAt), 'dd-MM-yyyy'),
  //   updatedAt: imports.format(new Date(user.updatedAt), 'dd-MM-yyyy'),
  // });

  // Exemplo de uso em rotas
  app.get("/empresas", async (req, res) => {
    try {
      const empresas = await imports.empresas.findAll();
      return res.send(imports.forms(empresas));
    } catch (error) {
      console.error(error);
      handleInternalError(res, "Problema ao buscar os empresas.");
    }
  });

  app.get("/avaliation/:id", async (req, res) => {
    const { id } = req.params; // ID da empresa
    console.log(id);
    try {
        // Busca as avaliações associadas ao empresa_id
        const avaliacoes = await imports.avaliacoes.findAll({
            where: { empresa_id: id } // Filtra por empresa_id
        });

        // Verifica se foram encontradas avaliações
        if (avaliacoes.length === 0) {
            return res.status(404).send({ message: "Nenhuma avaliação encontrada para esta empresa." });
        }

        return res.send(imports.avaliation(avaliacoes)); // Envia as avaliações
    } catch (error) {
        console.error(error);
        handleInternalError(res, "Erro ao buscar os dados das avaliações.");
    }
});



  // app.post("/formscreatusers", async (req, res) => {
  //   const { nome, sobrenome, inst, nifa, email, whatsapp, arroba, senha, typeuser } = req.body;

  //   if (!nome || !sobrenome || !email) {
  //     return handleBadRequest(res, "Campos obrigatórios: nome, sobrenome e email.");
  //   }

  //   try {
  //     const user = await imports.usuarios.create({
  //       nome: nome || '',
  //       sobrenome: sobrenome || '',
  //       inst: inst || '',
  //       nifa: nifa || '',
  //       email: email || '',
  //       whatsapp: whatsapp || '',
  //       arroba: arroba || '',
  //       senha: senha || '',
  //       typeuser: typeuser || ''
  //     });

  //     const formattedUser = formatUserDates(user.dataValues);
  //     return res.status(201).json({ message: "Usuário cadastrado com sucesso.", user: formattedUser });
  //   } catch (error) {
  //     console.error("Erro ao cadastrar usuário:", error);

  //     if (error.name === 'SequelizeUniqueConstraintError') {
  //       return handleBadRequest(res, "Email já cadastrado.");
  //     }

  //     handleInternalError(res, "Erro interno do servidor.");
  //   }
  // });


  // app.post("/formsdeleteuser", async (req, res) => {
  //   const { id } = req.body;

  //   if (!id) {
  //     return handleBadRequest(res, "Campo obrigatório: id.");
  //   }

  //   try {
  //     const result = await imports.usuarios.destroy({
  //       where: { id }
  //     });

  //     if (result === 0) {
  //       return handleNotFound(res, "Usuário não encontrado.");
  //     }

  //     return res.status(200).send("Usuário deletado com sucesso.");
  //   } catch (error) {
  //     console.error("Erro ao deletar usuário:", error);
  //     handleInternalError(res, "Erro interno do servidor.");
  //   }
  // });


  // app.post("/formsupdateuser", async (req, res) => {
  //   const { id, nome, sobrenome, email, whatsapp, inst } = req.body;

  //   if (!id || !nome || !sobrenome || !email) {
  //     return handleBadRequest(res, "Campos obrigatórios: id, nome, sobrenome e email.");
  //   }

  //   try {
  //     const [updated] = await imports.usuarios.update(
  //       { nome, sobrenome, email, whatsapp, inst },
  //       { where: { id } }
  //     );

  //     if (updated === 0) {
  //       return handleNotFound(res, "Usuário não encontrado.");
  //     }

  //     return res.status(200).send("Usuário atualizado com sucesso.");
  //   } catch (error) {
  //     console.error("Erro ao atualizar usuário:", error);
  //     handleInternalError(res, "Erro interno do servidor.");
  //   }
  // });

}





