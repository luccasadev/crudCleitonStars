import { RenderNames } from "../Constructors/ConstructorCardsEmpresas.js";

export const forms = (empresas = []) => {
  const Names = empresas.map((empresa) => RenderNames(empresa)).join("");

  const html = `
    <div 
    class="constructor-form">
    
    <div class="constructor-form__grid">
      
      <div
      class="constructor-form__names" >
        ${Names}
      </div>
      
    </div>


    <div id="target" style="display:none;"></div>
</div>
`;

  return applyMaskToHTML(html);
};
