import { RenderStars2 } from "../Constructors/ConstructorStarts.js";

export const avaliation = (avaliacoes = []) => {
    const start = RenderStars2(avaliacoes);
    
    return avaliacoes.map(({ avaliacao }) => 
        `<div class="render-avaliation">
            ${avaliacao}
            <div class="constructor-form__starts2">
                ${start}
            </div>
        </div>`
    ).join('');
};
  
  export const RenderAvaliations = (empresasId) => {
    const avaliacoes = avaliation(); // Aqui você pode passar as avaliações diretamente    
    return `
      <div
      class="render-avaliation-cards" 
      id="avaliations-${empresasId}">
        ${avaliacoes}
      </div>
    `;
  };