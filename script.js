
// Dados dos lugares
const descriptions = [{
    title:"Bar Brahma",
    description: "Um dos favoritos dos intelectuais, músicos e políticos nas décadas de 50 e 60, com cerveja, lanches e música.",
    address:"Av. São João, 677 - Centro Histórico de São Paulo, São Paulo - SP, 01036-000",
    precoMedio:"R$ 90,00",
    horario:"TODOS OS DIAS 11:00 - 21:00",
    melhorDia:"Sábados e Domingos",
    maiorProcura:"18:00 - 20:00",
    img: "brahma-bar",
    alt:"Imagem do Bar Brahma",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29261.81096202139!2d-46.658155860449206!3d-23.542342099999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a734b8f69c1%3A0x11889938a758d631!2sBar%20Brahma!5e0!3m2!1sen!2sbr!4v1623284906478!5m2!1sen!2sbr"
},{
    title:"Skye Bar",
    description: "Restaurante e bar sofisticado na cobertura do Hotel Unique, com piscina e vista da cidade",
    address:"Av. Brigadeiro Luís Antônio, 4700 - Jardim Paulista, São Paulo - SP, 01402-002",
    precoMedio:"R$ 220,00",
    horario:"TODOS OS DIAS 12:00 - 21:00",
    melhorDia:"Sábados e Domingos",
    maiorProcura:"15:00 - 16:00",
    img: "skyebar",
    alt:"Imagem do Sky Bar",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.626615299393!2d-46.66925338502178!3d-23.581850084672794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e140e844a5%3A0xee8005a359e780e3!2sSkye!5e0!3m2!1sen!2sbr!4v1623330701832!5m2!1sen!2sbr"
},{
    title:"Veloso",
    description: "Bar premiado no estilo carioca que serve entradas, petiscos e famosas caipirinhas.",
    address:"R. Conceição Veloso, 54 - Vila Mariana, São Paulo - SP, 04110-120",
    precoMedio:"R$60,00",
    horario:"TODOS OS DIAS 16:00 - 21:00",
    melhorDia:"Sábados e Domingos",
    maiorProcura:"18:00 - 20:00",
    img: "veloso-bar",
    alt:"Imagem do Bar Veloso",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40658.593696128715!2d-46.640666343983106!3d-23.584115506537056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5980ec1cedf5%3A0xf567c8180d5d40b7!2sBar%20Veloso!5e0!3m2!1sen!2sbr!4v1623329956478!5m2!1sen!2sbr"
},{
    title:"D-Edge",
    description: "Este clube de dança aprimora a experiência sensorial com iluminação elaborada, design e os últimos sucessos.",
    address:"Av. Auro Soares de Moura Andrade, 141 - Barra Funda, São Paulo - SP, 01156-001",
    precoMedio:"Entrada R$40,00, fora o consumo dentro da boate",
    horario:"Quinta a sábado, das 23h às 07h. Domingo, das 09h às 17h",
    melhorDia:"Sexta-feira",
    maiorProcura:"00:00 - 02:00",
    img: "D-edge",
    alt:"Imagem do D-Edge",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1221465586855!2d-46.664396485022806!3d-23.52810878469941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58053897fc67%3A0xc77a6d673e117223!2sD-Edge!5e0!3m2!1sen!2sbr!4v1623331194910!5m2!1sen!2sbr"
},{
    title:"The Week",
    description: "Clube LGBT com pista de dança moderna, área externa, piscina e público apaixonado por música eletrônica.",
    address:"R. Guaicurus, 324 - Lapa, São Paulo - SP, 05033-000",
    precoMedio:"Entrada de R$20,00 a R$80,00, fora o consumo dentro da boate",
    horario:"Quinta a sábado, das 23h às 07h",
    melhorDia:"Sábado",
    maiorProcura:"00:00 - 02:00",
    img: "the-week",
    alt:"Imagem do The Week",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.267011141381!2d-46.69027668502295!3d-23.522896984702033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef80cc725c0fd%3A0x7d565f932ef76f16!2sThe%20Week%20International!5e0!3m2!1sen!2sbr!4v1623331505192!5m2!1sen!2sbr"
},{
    title:"Villa Country",
    description: "Inspirada na cultura dos cowboys do western, o Villa Country possui 12 mil metros quadrados divididos em vários ambientes que remetem o visitante ao velho oeste americano.",
    address:"Av. Francisco Matarazzo, 774 - Água Branca, São Paulo - SP, 05001-000",
    precoMedio:"O preço varia entre R$ 30,00 e R$ 150,00",
    horario:"Somente aos Sábados 14:00 - 22:00",
    melhorDia:"Sábados",
    maiorProcura:"18:00 - 20:00",
    img: "villacountry",
    alt:"Imagem da Villa Country",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1264997749395!2d-46.672488185022864!3d-23.527952184699526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5802fdab9fd7%3A0x8f19e039ceb9e889!2sVilla%20Country!5e0!3m2!1sen!2sbr!4v1623331625130!5m2!1sen!2sbr"
},{
    
}]

// alteração dos dados
const DOM = {

    dados(index){
        let colocarDados = document.querySelector('.divImage')

        colocarDados.innerHTML = this.dadosInnerHtml(index)
    },

    dadosInnerHtml(description){
        
        const html = ` <figure>
            <figcaption class="title shadow"> ${description.title} </figcaption>
            <img class="place shadow" src="./img/${description.img}.jpg" alt="${description.alt}">
        </figure>
        <div class="description shadow" >
            <p>${description.description}</p>
            <p>${description.address}</p>
            <p>Preço Médio: ${description.precoMedio}</p>
            <p>Horario de funcionamento: ${description.horario}</p>
            <p>Melhor dia para visitação: ${description.melhorDia}</p>
            <p>Hórarios de maior procura: ${description.maiorProcura}</p>
        </div>
        `
        return html;
    },

    mapa(index){
        let colocarMapa = document.querySelector('.divMap');

        colocarMapa.innerHTML = this.mapaInnerHtml(index)

    },

    mapaInnerHtml(description){
        const html = 
        `<iframe class="map" src="${description.maps}" allowfullscreen="" loading="lazy"></iframe>`

        return html;
    }

}

// Abre paginas de acordo com seus dados
const ModalPages ={
    open(num){
        document.querySelector('.modalPlaces')
            .classList
            .add('active')

        DOM.dados(descriptions[num])
        DOM.mapa(descriptions[num])
    },

    close(){
        document.querySelector('.modalPlaces')
            .classList.remove('active')
    }
}
