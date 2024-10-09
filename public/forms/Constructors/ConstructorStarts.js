export const RenderStars = (empresasId) => {
  const html = `
    <div 
      id="stars-${empresasId}" 
      x-data="{ 
        rating: 0, 
        tempRating: 0,
        confirmRating(index) {
          this.rating = index; 
          this.tempRating = index; // Atualiza o tempRating após confirmar
          console.log('Avaliação confirmada:', this.rating);
        },
        setRating(index, event) {
          if (index + 1 <= this.rating) return; // Impede o hover em estrelas já selecionadas

          const boundingBox = event.target.getBoundingClientRect();
          const mouseX = event.clientX - boundingBox.left;
          const starWidth = boundingBox.width;

          // Atualiza a avaliação temporária com base no mouse sobre a metade da estrela
          this.tempRating = mouseX < starWidth / 2 ? index + 0.5 : index + 1;
        },
        resetRating() {
          this.tempRating = this.rating; // Reseta tempRating para o rating confirmado
        }
      }" 
      class="flex space-x-1 star-container">
      
      <template x-for="(star, index) in 5" :key="index">
        <div 
          class="relative flex items-center justify-center w-[23px] h-[22px] cursor-pointer"  
          @mousemove="setRating(index, $event)"
          @mouseleave="resetRating()"
          @click="confirmRating(tempRating)"
        >
          <!-- Retângulo para meia estrela -->
          <div 
            class="absolute z-50 cursor-pointer left-0 top-0 w-1/2 h-full"
            @mousemove="setRating(index, $event)" 
            @click="confirmRating(index + 0.5)"
          ></div>

          <!-- Retângulo para estrela inteira -->
          <div 
            class="absolute z-50 cursor-pointer right-0 top-0 w-1/2 h-full"
            @mousemove="setRating(index, $event)" 
            @click="confirmRating(index + 1)"
          ></div>

          <!-- Estrela cheia -->
          <object
            mask="../img/star.svg"
            class="star bg-yellow-500 w-[23px] h-[22px] absolute"
            x-show="rating >= index + 1 || (tempRating >= index + 1)"
          ></object>
          
          <!-- Estrela meia -->
          <object
            mask="../img/star.svg"
            class="star-half bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-[#b6b6b6] to-yellow-500 w-[23px] h-[22px] absolute"
            x-show="tempRating >= index + 0.5 && tempRating < index + 1 || (rating >= index + 0.5 && rating < index + 1)"
          ></object>
          
          <!-- Estrela vazia -->
          <object
            mask="../img/star.svg"
            class="star-empty bg-[#b6b6b6] w-[23px] h-[22px] absolute"
            x-show="rating < index + 0.5 && tempRating < index + 0.5"
          ></object>
        </div>
      </template>
    </div>
  `;

  return applyMaskToHTML(html);
};


export const RenderStars2 = (empresasId) => {
  const html = `
    <div 
      id="stars-${empresasId}" 
      x-data="{ 
        rating: 0, 
        tempRating: 0,
        confirmRating(index) {
          this.rating = index; 
          this.tempRating = index; // Atualiza o tempRating após confirmar
          console.log('Avaliação confirmada:', this.rating);
        },
        setRating(index, event) {
          if (index + 1 <= this.rating) return; // Impede o hover em estrelas já selecionadas

          const boundingBox = event.target.getBoundingClientRect();
          const mouseX = event.clientX - boundingBox.left;
          const starWidth = boundingBox.width;

          // Atualiza a avaliação temporária com base no mouse sobre a metade da estrela
          this.tempRating = mouseX < starWidth / 2 ? index + 0.5 : index + 1;
        },
        resetRating() {
          this.tempRating = this.rating; // Reseta tempRating para o rating confirmado
        }
      }" 
      class="flex space-x-1 star-container">
      
      <template x-for="(star, index) in 5" :key="index">
        <div 
          class="relative flex items-center justify-center w-[23px] h-[22px] cursor-pointer"  
          @mousemove="setRating(index, $event)"
          @mouseleave="resetRating()"
          @click="confirmRating(tempRating)"
        >
          <!-- Retângulo para meia estrela -->
          <div 
            class="absolute z-50 cursor-pointer left-0 top-0 w-1/2 h-full"
            @mousemove="setRating(index, $event)" 
            @click="confirmRating(index + 0.5)"
          ></div>

          <!-- Retângulo para estrela inteira -->
          <div 
            class="absolute z-50 cursor-pointer right-0 top-0 w-1/2 h-full"
            @mousemove="setRating(index, $event)" 
            @click="confirmRating(index + 1)"
          ></div>

          <!-- Estrela cheia -->
          <object
            mask="../img/star.svg"
            class="star bg-yellow-500 w-[23px] h-[22px] absolute"
            x-show="rating >= index + 1 || (tempRating >= index + 1)"
          ></object>
          
          <!-- Estrela meia -->
          <object
            mask="../img/star.svg"
            class="star-half bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-[#b6b6b6] to-yellow-500 w-[23px] h-[22px] absolute"
            x-show="tempRating >= index + 0.5 && tempRating < index + 1 || (rating >= index + 0.5 && rating < index + 1)"
          ></object>
          
          <!-- Estrela vazia -->
          <object
            mask="../img/star.svg"
            class="star-empty bg-[#b6b6b6] w-[23px] h-[22px] absolute"
            x-show="rating < index + 0.5 && tempRating < index + 0.5"
          ></object>
        </div>
      </template>
    </div>
  `;

  return applyMaskToHTML(html);
};
