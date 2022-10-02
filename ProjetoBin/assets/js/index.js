let links = document.querySelectorAll(".link")

//ativar apenas os links que possuem paginas 
links.forEach((element) => {

    if(element.href.includes("index.html")){
        element.style.display = 'none'
    }
})