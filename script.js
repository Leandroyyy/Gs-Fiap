
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
    title:"Teatro Municipal",
    description: "Teatro Municipal de São Paulo é um teatro em São Paulo, Brasil. É considerada um dos marcos da cidade, significativo tanto pelo valor arquitetônico quanto pela importância histórica, tendo sido palco da Semana de Arte Moderna de 1922, que revolucionou as artes no Brasil.",
    address:"Praça Ramos de Azevedo, s/n - República, São Paulo - SP, 01037-010",
    precoMedio:"Entrada Gratuita",
    horario:"Segunda a Sexta, 10:00 - 19:00, Sábados e Domingos, 10:00 - 17:00",
    melhorDia:"Sábados e Domingos",
    maiorProcura:"13:00 - 14:00",
    img: "teatro_Municipal_de_São_Paulo",
    alt:"Imagem do Teatro Municipal",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.645907698909!2d-46.64080368502257!3d-23.54523478469082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56113b8aa18b%3A0x275b79f7efe44e1e!2sMunicipal%20Theatre%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1623418411136!5m2!1sen!2sbr"
},{
    title:"Vila Madalena",
    description: "O boêmio bairro da Vila Madalena, também chamado de Vila, é conhecido por suas lojas de moda independente, cafés asuais e galerias de arte contemporânea.",
    address:"Vila Madalena, SP",
    precoMedio:"Gratuito",
    horario:"TODOS OS DIAS",
    melhorDia:"TODOS OS DIAS",
    maiorProcura:"13:00 - 16:00",
    img: "vila-madalena",
    alt:"Imagem da Vila Madalena",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.070470931783!2d-46.70888301969857!3d-23.549846205015985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57be69847fa9%3A0xd423d197dd9d1e01!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1623422020577!5m2!1sen!2sbr"
},{
    title:"Bixiga",
    description: "Bixiga é um bairro no centro da cidade de São Paulo, Brasil. Localiza-se no bairro Bela Vista. O Bixiga é conhecido por ter sido um polo de imigrantes italianos",
    address:"Bela Vista, SP",
    precoMedio:"Gratuito",
    horario:"TODOS OS DIAS",
    melhorDia:"TODOS OS DIAS",
    maiorProcura:"12:00 - 15:00",
    img: "bairro_bixiga",
    alt:"Imagem do Bairro Bixiga",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.605068218404!2d-46.649309624977825!3d-23.55757553873891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b141b30dd3%3A0x5aa5c35cefd9da86!2sBixiga%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1623422594793!5m2!1sen!2sbr"
},{
    title:"Jockey Club",
    description: "O Jockey Club de São Paulo promove corridas de cavalos todos os sábados e domingos a partir das 14h",
    address:"Av. Lineu de Paula Machado, 1263 - Cidade Jardim, São Paulo - SP, 05601-000",
    precoMedio:"Gratuito. Não paga nada para assistir.",
    horario:"Todos os dias 08:00 - 17:00",
    melhorDia:"Sábados",
    maiorProcura:"13:00 - 14:00",
    img: "jockey-club",
    alt:"Imagem do Jockey Club",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5959760935393!2d-46.70107078502171!3d-23.582949884672146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5710264822bb%3A0x8df49cd651035b8!2sJockey%20Club%20de%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1623422718934!5m2!1sen!2sbr"
},{
    title:"Feira da Praça",
    description: "Ao explorar Pinheiros, bairro conhecido por seus restaurantes e cafés aconchegantes, você notará uma energia jovem. Vários centros culturais e institutos circundam a área e até mesmo sua igreja principal, o Calvário, hospeda uma tradicional “Festa Junina” brasileira - uma celebração com música, dança e comida tradicional durante os meses de junho e julho.",
    address:"Pinheiros, SP",
    precoMedio:"Gratuito a entrada",
    horario:"Somente nos meses de Junho e Julho nos Finais de semana",
    melhorDia:"Sábados e Domingos",
    maiorProcura:"11:00 - 14:00",
    img: "feira-praca-benedito-calixto",
    alt:"Imagem da Feira da praça Benedito calixto",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2844311595527!2d-46.6828061850221!3d-23.558225984684537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579b48152a2f%3A0xa2d40f47dd19990f!2sPra%C3%A7a%20Benedito%20Calixto%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1623425451020!5m2!1sen!2sbr"
},{
    title:"Autódromo de Interlagos",
    description: "O Autódromo José Carlos Pace, mais conhecido como Interlagos, é um circuito de automobilismo localizado na cidade de São Paulo, no bairro de Interlagos.",
    address:"Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, 04801-010",
    precoMedio:"R$ 110 (para participar da competição); R$ 10 + 1 kg de alimento não-perecível (para assistir da arquibancada); R$ 40 + 1 kg de alimento não-perecível (credencial para os boxes)",
    horario:"Consultar o site oficial, para ver sobre os horários das próximas corridas",
    melhorDia:"Consultar no site oficial dia de corridas",
    maiorProcura:"Grandes Corridas",
    img: "autodromo_interlagos",
    alt:"Imagem do Autodromo Interlagos",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2942218707367!2d-46.70014308501954!3d-23.70118498461365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fc83e9584af%3A0x2ffcdc07da2ca5c0!2sAut%C3%B3dromo%20Jos%C3%A9%20Carlos%20Pace!5e0!3m2!1sen!2sbr!4v1623425925686!5m2!1sen!2sbr"
},{
    title:"Casa de Pedra",
    description: "A Casa de Pedra é o maior ginásio de escalada esportiva do país com paredes de até 14m de altura e mais de 100 vias de escalada guiada, top rope e boulder​.",
    address:"R. Venâncio Aires, 31 - Pompeia, São Paulo - SP, 05024-030",
    precoMedio:"R$70,00 , pode variar dependendo do dia da semana",
    horario:"Segunda à Sexta das 6:00 às 23:00. Sabados, Domingos, feriados e emendas das 14:00 às 20:00",
    melhorDia:"Sábados",
    maiorProcura:"12:00 - 14:00",
    img: "casa-da-pedra",
    alt:"Imagem da Cada de Pedra",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234180.53240656515!2d-47.02446879541263!3d-23.493958544709407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fb6323e763%3A0x6205d6efd28789a7!2sCasa%20de%20Pedra%20Perdizes%20-%20Gin%C3%A1sio%20de%20Escalada!5e0!3m2!1sen!2sbr!4v1623432690772!5m2!1sen!2sbr"
},{
    title:"Escape",
    description: "O Escape 60 é uma experiência indoor entre amigos, colegas de trabalho ou familiares, vivenciado em um ambiente de mistério e especialmente desenvolvido para aguçar suas habilidades e sua inteligência.",
    address:"R. Baluarte, 18 - Vila Olímpia, São Paulo - SP, 04549-010",
    precoMedio:"R$84,90 reais",
    horario:"Domingo a Quinta-feira 10:00 - 22:30 , Sexta-feira e Sábado 10:00 as 23:50",
    melhorDia:"Sábados",
    maiorProcura:"18:00 - 20:00",
    img: "escape-60",
    alt:"Imagem do Escape",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.163373285039!2d-46.677164685021474!3d-23.59847308466457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57549ad677d5%3A0x48b4dbc1d2b7af4c!2sEscape%2060!5e0!3m2!1sen!2sbr!4v1623433309726!5m2!1sen!2sbr"
},{
    title:"Espaço das Américas",
    description: "O Espaço das Américas é uma casa de eventos localizada na Barra Funda, zona oeste de São Paulo, com capacidade para comportar confortavelmente 8 mil pessoas em uma área útil de 3.450m².",
    address:"R. Tagipuru, 795 - Barra Funda, São Paulo - SP, 01156-000",
    precoMedio:"Consultar o site oficial, para ver sobre os preços dos eventos.",
    horario:"Consultar o site oficial, para ver sobre os horários.",
    melhorDia:"Consultar o site oficial",
    maiorProcura:"A depender do show",
    img: "espaco-das-americas",
    alt:"Imagem do Espaço das americas",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1324374511396!2d-46.67001898502288!3d-23.527738584699577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5803b6a863d5%3A0x55b43bfc3a4cde14!2zRXNwYcOnbyBkYXMgQW3DqXJpY2Fz!5e0!3m2!1sen!2sbr!4v1623433539524!5m2!1sen!2sbr"
},{
    title:"Cinépolis",
    description: "O Cinépolis JK Iguatemi São Paulo conta com quatro salas VIP, uma VIP com poltronas Lounge e projeção a laser e som imersivo Harman Quantum, uma VIP Samsung Onyx 4K, sendo essa a primeira sala LED do Brasil, uma IMAX e uma 4DX, com um total de oito salas e 965 lugares, sendo que desses, 25 vagas são para cadeirantes.",
    address:"Av. Pres. Juscelino Kubitschek, 2041 - Vila Olímpia, São Paulo",
    precoMedio:"Consultar o preço do ingresso, do filme desejado no site oficial",
    horario:"Consultar o filme em cartaz no site oficial",
    melhorDia:"Consultar o filme que deseja",
    maiorProcura:"18:00 - 20:00",
    img: "cinepolis-jk-iguatemi",
    alt:"Imagem do Cinepolis JK Iguatemi",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3566051621424!2d-46.691478585021656!3d-23.591540484667906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b8a006f1ef%3A0xe17dab2f34092fb!2sCin%C3%A9polis!5e0!3m2!1sen!2sbr!4v1623433737222!5m2!1sen!2sbr"
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

        document.querySelector('body').style.overflow = "hidden"    },

    close(){
        document.querySelector('.modalPlaces')
            .classList.remove('active')

        document.querySelector('body').style.overflow = "scroll"
    }
}

//validar login

// LOGIN =======================================

function check(page) {

    if (page.username.value == "teste@teste.com" && page.password.value == "teste") {
        location('./escolha.html')
    }else {
        alert("Error Password or Username")
    }
}