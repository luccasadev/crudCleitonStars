
export const avaliation = (avaliacoes = []) => 
    avaliacoes.map(({ avaliacao }) => 
        `<div
            class="render-avaliation">
            ${avaliacao}
        </div>`
    ).join('');
  
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