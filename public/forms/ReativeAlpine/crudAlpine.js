
Alpine.store('reload', {

  // Método para recarregar o conteúdo do div
  reloadDiv(empresa_id) {
    // Faz a requisição GET para '/forms' usando htmx
    htmx.ajax('GET', `/avaliation/${empresa_id}`, {
      target: `#avaliations-${empresa_id}`, // ID do elemento onde o conteúdo da resposta será injetado
      swap: 'innerHTML' // Modo de substituição (pode ser 'innerHTML', 'outerHTML', etc.)
    });
  },

  clearReload(empresa_id) {
    this.reloadDiv(empresa_id); // Chama reloadDiv com empresa_id

    // Limpa o campo de texto correspondente ao empresa_id
    const textarea = document.querySelector(`#avaliacao${empresa_id}`);
    if (textarea) {
        textarea.value = ''; // Define o valor como vazio
    } else {
        console.error(`Textarea com ID #avaliacao${empresa_id} não encontrado.`);
    }
}
});


Alpine.store("crudusers", {
  jsonData: {},  // Inicializa a variável jsonData para armazenar os dados

  // Função para capturar dados dos inputs
  captureInputValues(empresaId) {
    if (empresaId) {
      this.jsonData = {
        avaliacao: document.querySelector(`#avaliacao${empresaId}`).value, // Captura o valor do textarea 'avaliacao'
      };

      console.log(`#avaliacao${empresaId}`, this.jsonData)
    } else {
      console.error("textarea de avaliação não encontrado para empresa ID:", empresaId);
    }
  },

  // Função para lidar com as ações de clique em diferentes botões
  async handleClick(buttonId, empresaId) {
    console.log(`Botão: ${buttonId}, Empresa ID: ${empresaId}`);  // Para garantir que estamos capturando os valores corretamente

    if (buttonId === "button1") {
      const buttonAction = document.querySelector("#button1")?.innerText;

      if (!buttonAction) {
        console.error("Botão não encontrado ou sem ação definida");
        return;
      }

      if (buttonAction === "Post") {
        this.captureInputValues(empresaId); // Captura os dados dos inputs

        // Verifica se os dados foram capturados corretamente
        if (this.jsonData.avaliacao) {
          try {
            const response = await fetch(`/avaliation/${empresaId}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.jsonData),
            });

            if (response.ok) {
              console.log("Avaliação enviada com sucesso!");
            } else {
              console.error("Erro ao enviar a avaliação:", response.statusText);
            }
          } catch (error) {
            console.error("Erro durante a requisição:", error);
          }
        } else {
          console.error("Os dados da avaliação não foram capturados corretamente.");
        }
      }
    }
      else if (buttonId === "button2") {
        buttonAction = document.querySelector("#button2").innerText;

        if (buttonAction === "Nope") {

        }
      }

      // Limpa os campos de input após o envio
      Alpine.store("reload").clearReload(`${empresaId}`);
  }
});


Alpine.store('renderNamesStore', {
  expandedId: null, // Armazena o ID do elemento expandido

  // Alterna a visibilidade do elemento e expande o grid
  toggleExpand(id) {
    this.expandedId = this.expandedId === id ? null : id; // Se já estiver expandido, colapsa
  },

  // Verifica se o elemento está expandido
  isExpanded(id) {
    return this.expandedId === id;
  }
});



