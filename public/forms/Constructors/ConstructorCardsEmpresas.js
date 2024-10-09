import { constructorForms } from "../Constructors/constructorForms.js";
import { buttonsForms } from "../Constructors/ConstructorbuttonsForms.js";
import { RenderAvaliations } from "../Constructors/ConstructorAvaliations.js"
import { RenderStars } from "../Constructors/ConstructorStarts.js"


export const RenderNames = (empresas) => {
  const textarea = constructorForms(empresas.id);
  const buttons = buttonsForms(empresas.id);
  const renderava = RenderAvaliations(empresas.id);
  const start = RenderStars(empresas.id);

  const html = `
  <div 
    class="render-names"
    hx-get="/avaliation/${empresas.id}"
    hx-target="#avaliations-${empresas.id}" 
    hx-swap="innerHTML">


  <div class="render-names-group"
  @click="() => {$store.renderNamesStore.toggleExpand(${empresas.id});}"
  :class="{ 'grid-cols-2': $store.renderNamesStore.isExpanded(${empresas.id}), 'grid-cols-1': !$store.renderNamesStore.isExpanded(${empresas.id}) }">

    <div class="render-card"
      :class="($store.reload.active${empresas.id} === ${empresas.id} ? 'bg-slate-800' : 'bg-slate-900')">
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
      :style="$store.renderNamesStore.isExpanded(${empresas.id}) ? 'display:block' : 'display:none'">
        ${textarea} 

      <div class="constructor-form__starts">
        ${start}
      </div>

      <div class="constructor-form__buttons"
        hx-get="/avaliation/${empresas.id}"
        hx-target="#avaliations-${empresas.id}" 
        hx-swap="innerHTML"
        @click="() => {
        $store.renderNamesStore.toggleExpand(${empresas.id});
        $store.renderNamesStore.toggleExpand(${empresas.id});
        }"> 
        ${buttons} 
      </div>
    </div>

  </div>



  <div
  :style="$store.renderNamesStore.isExpanded(${empresas.id}) ? 'display:block' : 'display:none'">

    ${renderava}
    
  </div>

  </div>
  `;

  return applyMaskToHTML(html);
};
