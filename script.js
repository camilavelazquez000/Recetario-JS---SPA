document.addEventListener("DOMContentLoaded", ()=> {
    //SPA
    //Traigo todos los links que se clickeen
    let links = document.querySelectorAll("a");
    let main = document.querySelector("main");

    //Recorro cada uno de los links
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            let id = link.id;
            let archivo = id + ".html";
            let xhr = ajax(archivo);
            xhr.addEventListener("load", () => {
                if (xhr.status === 200) {
                    main.innerHTML = xhr.response;
                } else {
                    main.innerHTML = "<p>Error al cargar el contenido</p>";
                }
            });
        });
    });

    // Cargar la página inicial
    let pagina_inicial = ajax("home.html");
    pagina_inicial.addEventListener("load", () => {
        if (pagina_inicial.status === 200) {
            main.innerHTML = pagina_inicial.response;
        } else {
            main.innerHTML = "<p>Error al cargar el contenido inicial</p>";
        }
    });

    function ajax(url, metodo) {
        let http_metodo = metodo || "GET";
        let xhr = new XMLHttpRequest();
        xhr.open(http_metodo, url);
        xhr.send();
        return xhr;
    }
})