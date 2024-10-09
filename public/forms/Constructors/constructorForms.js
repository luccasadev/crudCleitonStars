import { txtinput, txtplace } from "../Extructure/txtValues.js";

export const constructorForms = (empresaId) => {
  const inputMap = txtinput();
  const placeMap = txtplace();

  const formsHTML = inputMap.map((input) => {
    const placeholder = placeMap.find(place => place.id === input.id).placeholder;

    return `
    <textarea
      class="in ipt"
      id="${input.name}${empresaId}"
      name="${input.name}${empresaId}"
      placeholder="${placeholder}"
      rows="3"  
      style="resize: none;"
    ></textarea>
    `;
  }).join("");

  return formsHTML; 
};
