
Alpine.store('reload', {

  activeCount: null, // Armazena o índice do elemento ativo

  handleClick(count) {
    // Define activeCount como o índice do elemento clicado
    this.activeCount = count;
  },
  // Método para recarregar o conteúdo do div
  reloadDiv() {
    // Faz a requisição GET para '/forms' usando htmx
    htmx.ajax('GET', '/forms', {
      target: '#names', // ID do elemento onde o conteúdo da resposta será injetado
      swap: 'innerHTML' // Modo de substituição (pode ser 'innerHTML', 'outerHTML', etc.)
    });
  },
  
  // Método para limpar todos os inputs e recarregar o div
  clearInputs() {
    // Seleciona todos os inputs com a classe .in
    const inputs = document.querySelectorAll(".in");
    
    // Limpa o valor de cada input
    inputs.forEach((input) => {
      input.value = "";
    });
  },

  clearReload() {
    this.reloadDiv();

    setTimeout(() => {
    this.clearInputs();
  }, 500);
  setTimeout(() => {
  this.handleClick();
}, 500);
},

});



// Store para gerenciamento dos dados do user e controle de atualização
Alpine.store("formsData", {
  selected: null,
  user: {
    id: "",
    nome: "",
    sobrenome: "",
    inst: "",
    nifa: "",
    email: "",
    whatsapp: "",
    arroba: "",
    senha: "",
    typeuser: "",
  },

  // Função para carregar dados para atualização
  loadForUpdate(dados) {
    this.user = {
      id: dados.id,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      inst: dados.inst,
      nifa: dados.nifa,
      email: dados.email,
      whatsapp: dados.whatsapp,
      arroba: dados.arroba,
      senha: dados.senha,
      typeuser: dados.typeuser,
    };
    // Atualiza os textos dos botões usando outro store
    Alpine.store("txtButtonTrade").updateButtonTexts();
  },

  // Função de inicialização
  init() {
    // Adiciona o listener para o evento htmx:afterSettle
    document.addEventListener("htmx:afterSettle", (event) => {
      // Verifica o target correto
      if (event.detail.target.id === "target") {
        // Captura e atualiza os dados recebidos via JSON
        let response = JSON.parse(event.detail.target.innerText);
        this.loadForUpdate(response.user);
      }
    });
  },
});

// Store para gerenciar ações de CRUD (Cadastro, Atualização, Exclusão)
Alpine.store("crudusers", {
  // Função para capturar dados dos inputs
  captureInputValues() {
    this.jsonData = {
      
      nome: document.querySelector("#nome").value, // Captura o valor do input 'nome'
      sobrenome: document.querySelector("#sobrenome").value, // Captura o valor do input 'sobrenome'
      inst: document.querySelector("#inst").value, // Captura o valor do input 'inst'
      nifa: document.querySelector("#nifa").value, // Captura o valor do input 'nifa'
      email: document.querySelector("#email").value, // Captura o valor do input 'email'
      whatsapp: document.querySelector("#whatsapp").value, // Captura o valor do input 'whatsapp'
    };
  },

  // Função para limpar os campos de input


  // Função para lidar com as ações de clique em diferentes botões
  async handleClick(buttonId) {
    let buttonAction;

    console.log(buttonId);
    // Verifica o buttonId para definir a ação
    if (buttonId === "button1") {
      buttonAction = document.querySelector("#button1").innerText;

      if (buttonAction === "Cadastrar") {
        this.captureInputValues(); // Chama a função para capturar os dados

        response = await fetch("/formscreatusers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.jsonData),
        });

      } else if (buttonAction === "Salvar") {
        this.captureInputValues(); // Chama a função para capturar os dados

        let selectedId = Alpine.store("formsData").user.id;

        // Verifica se há um ID selecionado
        if (selectedId) {
            // Cria o corpo da requisição com o ID e outros dados do user
            let requestBody = JSON.stringify({
                id: selectedId,
                nome: this.jsonData.nome,           // Certifique-se de que estes campos existem
                sobrenome: this.jsonData.sobrenome,
                email: this.jsonData.email,
                whatsapp: this.jsonData.whatsapp,
                dataNascimento: this.jsonData.dataNascimento,
                inst: this.jsonData.inst,           // Adicione esses campos se necessário
                nifa: this.jsonData.nifa
            });
        
            // Envia a requisição para o servidor
            response = await fetch("/formsupdateuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody, // Use a string JSON diretamente
            });
        }

    } 
  }

    else if (buttonId === "button2") {
      buttonAction = document.querySelector("#button2").innerText;

      if (buttonAction === "Cancelar") {
            // Atualiza os textos dos botões usando outro store
        Alpine.store("txtButtonTrade2").updateButtonTexts();
        

      }
    }
    
    else if (buttonId === "button3") {
      buttonAction = document.querySelector("#button3").innerText;

      if (buttonAction === "Deletar") {

    // Captura o ID do user do Alpine store
    let selectedId = Alpine.store("formsData").user.id;

    // Verifica se há um ID selecionado
    if (selectedId) {
        // Cria o corpo da requisição com o ID
        let requestBody = JSON.stringify({ id: selectedId });

        // Envia a requisição de deleção
        response = await fetch("/formsdeleteuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody, // Usa o corpo da requisição com apenas o ID
        });

      }
      
    }
  }
         // Limpa os campos de input após o envio
         Alpine.store("reload").clearReload();

          
},
});

Alpine.store("elementCount", {

});


// Componente txtButtonTrade
Alpine.store("txtButtonTrade", {
  updateButtonTexts() {
    document.getElementById("button1").innerText = "Salvar";

  },
});

Alpine.store("txtButtonTrade2", {
  updateButtonTexts() {
    document.getElementById("button1").innerText = "Cadastrar";

  },
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



