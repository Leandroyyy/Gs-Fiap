
// Dados dos lugares
const descriptions = [{
    id:1,
    title:"Bar Brahma",
    description: "AGORA NO BAR BRAHMA",
    img: "brahma-bar"
},{
    id:2,
    title:"Skye Bar",
    description: "TESTANDO TUDO AQUI NO SKYE",
    img: "skyebar"
},{
    id:3,
    title:"Veloso",
    description: "DEPOIS AQUI NO VELOSO",
    img: ""
}]

// alteração dos dados
const DOM = {

    dados(index){

        let colocarDados = document.querySelector('.divImage')

        colocarDados.innerHTML = this.dadosInnerHtml(index)

    },

    dadosInnerHtml(description){
        
        const html = ` <figure>
            <figcaption class="title shad"> ${description.title} </figcaption>
            <img class="place shadow" src="./img/${description.img}.jpg" alt="Imagem do Bar Brahma">
        </figure>
        <div class="description shadow" >
            <p>${description.description} </p>
        </div>
        `
        return html;
    }

}

DOM.dados(descriptions[1])


