import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between gap-2 shadow-xl shadow-slate-400 rounded-lg group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm font-bold'>${produtoCatalogo.nome}</p>
        
       <div class="flex justify-between ">
          <p class='text-lg w-2/5 p-2'>R$${produtoCatalogo.preco},00</p>
          <select id="tamanho" class=" bg-stone-200 outline-none  bg-stone-200 shadow-xl shadow-slate-400 text-center rounded-lg w-2/5 h-4/5 text-sm">
            <option id="tamanhoDisponivel" value='${produtoCatalogo.tamanho}'>${produtoCatalogo.tamanho}</option>
            <option disabled>Esgotado</option>
            <option disabled>Esgotado</option>
            <option disabled>Esgotado</option>
          </select>
        </div>
        <button id='adicionar-${
          produtoCatalogo.id
        }' class='bg-slate-950  rounded-lg hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
   

}
