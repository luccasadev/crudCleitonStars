import { constructorForms } from "../Constructors/constructorForms.js";
import { buttonsForms } from "../Constructors/ConstructorbuttonsForms.js";
import { RenderAvaliations } from "../Constructors/ConstructorAvaliations.js"
import { RenderStars } from "../Constructors/ConstructorStarts.js"


export const RenderNames = (empresas) => {
  const textarea = constructorForms(empresas.id);
  const buttons = buttonsForms();
  const renderava = RenderAvaliations(empresas.id);
  const start = RenderStars(empresas.id);

  const html = `
  <div 
    class="render-names"
    hx-get="/avaliation/${empresas.id}"
    hx-target="#avaliations-${empresas.id}" 
    hx-swap="innerHTML"
    x-data="{ count: ${empresas.id} }"
    @click="() => { 
      $store.reload.handleClick(count); 
      $store.formsData.loadForUpdate({});
    }" >



  <div class="render-names-group"
  @click="() => {$store.renderNamesStore.toggleExpand(count);}"
  :class="{ 'grid-cols-2': $store.renderNamesStore.isExpanded(count), 'grid-cols-1': !$store.renderNamesStore.isExpanded(count) }">

    <div class="render-card"
      :class="($store.reload.activeCount === count ? 'bg-slate-800' : 'bg-slate-900')">
        <!-- Nome da empresa -->
        <div class="render-names__name">
          ${empresas.nome}
        </div>
        
        <div class="render-names__info">

              <span class="render-pin">
                <!-- Cidade -->
                <div>
                  ${empresas.cidade}
                </div> 
                ‎ - ‎ 
                <!-- Estado -->
                <div>
                  ${empresas.estado}
                </div>
              </span>

              <!-- Endereço -->
              <div class="render-pin">
                ${empresas.endereco}
              </div>
          </div>

          </div>
          
    <div 
      class="relative z-50"
      @click.stop
      :style="$store.renderNamesStore.isExpanded(count) ? 'display:block' : 'display:none'">
        ${textarea} 

      <div class="constructor-form__starts">
        ${start}
      </div>

      <div class="constructor-form__buttons"
      
         @click="() => {$store.renderNamesStore.toggleExpand(count);}"> 
        ${buttons} 
      </div>
    </div>

  </div>



  <div 
  @click.stop
   :style="$store.renderNamesStore.isExpanded(count) ? 'display:block' : 'display:none'">

   ${renderava}
  
  </div>

  </div>
  `;

  return applyMaskToHTML(html);
};
