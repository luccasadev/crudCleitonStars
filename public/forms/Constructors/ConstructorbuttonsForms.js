import { txtButtons } from "../Extructure/txtValues.js";

export const buttonsForms = () => {
  // Obtém os botões diretamente do txtButtons
  const buttonMap = txtButtons();

  // Mapeia os botões para gerar o HTML correspondente
  const buttonsHTML = buttonMap.map((button) => {
    return `
        <button
        class="btn"
        @click="$store.crudusers.handleClick('button${button.id}')"
          type="button"
          id="button${button.id}">
          ${button.text}
        </button>
    `;
  }).join(""); // Junta todos os botões em uma única string

  return buttonsHTML; // Retorna o HTML final dos botões
};