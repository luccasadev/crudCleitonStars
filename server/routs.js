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



app.post("/avaliation/:id", async (req, res) => {
  const empresa_id = req.params.id; // Captura o id da URL (empresa_id)
  const { avaliacao } = req.body; // Captura a avaliacao enviada no body

  try {
    // Verifica se a empresa existe
    const empresa = await imports.empresas.findOne({
      where: { id: empresa_id }
    });

    if (!empresa) {
      return res.status(404).send({ message: "Empresa não encontrada." });
    }

    // Cria ou atualiza a avaliação para a empresa
    const avaliacaoResult = await imports.avaliacoes.create({
      empresa_id,
      avaliacao
    });

    // Retorna a avaliação criada/atualizada
    return res.status(201).send({
      message: "Avaliação salva com sucesso.",
      avaliacao: avaliacaoResult
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao salvar a avaliação." });
  }
});

}