//let currentPage = 1; // Variable para el número de página actual

function getValorDeUnParametroDelHash(nameParametro) {
    // Obtener la cadena de búsqueda de parámetros (después del "?")
    const searchParams = getsearchParams();
    // Verificar si hay búsqueda de parámetros
    if (searchParams !== null) {
        // Crear un objeto URLSearchParams a partir de la cadena de búsqueda de parámetros
        const urlSearchParams = new URLSearchParams(searchParams);

        // Obtener el valor del parámetro "page"
        const valorParametro = urlSearchParams.get(nameParametro);
        
        if (valorParametro !== null) {
            //console.log('valorParametro: ', valorParametro);
            return valorParametro;
        }
    }
    console.log('No hay busqueda por parametro en la URL.. o El parametro no existe en la URL..');
    return null;
}
function setValorDeUnParametroDelHash(nameParametro,nuevoValorDelParametro) {
    //console.log('viejoValorDelParametro:',nameParametro,'=',getValorDeUnParametroDelHash(nameParametro));
    //console.log('nuevoValorDelParametro:',nameParametro,'=',nuevoValorDelParametro);
    
    if(getValorDeUnParametroDelHash(nameParametro)!==null){
        actualizarValorDeUnParametro(nameParametro,nuevoValorDelParametro);
    }else{
        window.location.hash = window.location.hash+`&${nameParametro}=${nuevoValorDelParametro}`;

    }
    
    
}
function getsearchParams() {
    const hash = getHash();
    // Buscar el índice de "?" en la URL para determinar si hay búsqueda de parámetros
    const indexOfQuestionMark = hash.indexOf('?');

    // Verificar si hay búsqueda de parámetros
    if (indexOfQuestionMark !== -1) {
        // Obtener la cadena de búsqueda de parámetros (después del "?")
        const searchParams = hash.substring(indexOfQuestionMark + 1);
        return searchParams;
    }
    console.log('La URL no contiene búsqueda de parámetros o no está presente en la URL..');
    return null;
}


function getHash() {
    const hash = location.hash;
    return hash ? hash.toLowerCase().replace('#', '') : '/';
}

/*
function getNumeroDeParametrosDelHash() {
    // Obtener la cadena de búsqueda de parámetros (después del "?")
    const searchParams = getsearchParams();

    // Verificar si hay búsqueda de parámetros
    if (searchParams !== null) {        
        // Crear un objeto URLSearchParams a partir de la cadena de búsqueda de parámetros
        const urlSearchParams = new URLSearchParams(searchParams);
        //console.log(`urlSearchParams: ${urlSearchParams.toString()}`);

        const paramsCount = urlSearchParams.toString().split('&').length;
        console.log(`Número de parámetros: ${paramsCount}`);
        return paramsCount;
    } else {
        console.log('La URL no contiene búsqueda de parámetros.');
        //window.location.hash = window.location.hash+`/character/?page=1`;
        return null;
    }
}
*/

/*
// Función para actualizar la página actual y el elemento HTML correspondiente
function actualizarNumeroDePagina(currentPage) {
    // Obtener la URL actual
    const currentURL = window.location.href;
        
    // Buscar y reemplazar el valor del parámetro "page" en la URL
    const nuevaURL = currentURL.replace(/([&?])page=\d+/i, `$1page=${currentPage}`);
    console.log('nuevaURL:',nuevaURL);
        
    // Redirigir a la nueva URL
    window.location.href = nuevaURL;
}
*/
function actualizarValorDeUnParametro(nameParametro,nuevoValorDelParametro) {
    // Obtener la URL actual
    const currentURL = window.location.href;
        
    // Buscar y reemplazar el valor del parámetro "page" en la URL
    //const parametroRegex = new RegExp(`([&?])${nameParametro}=\\w+`, 'i'); //busca una o más letras o números después del parámetro, lo que significa que si el parámetro está vacío o no contiene letras o números, la expresión regular no lo detectará.
    const parametroRegex = new RegExp(`([&?])${nameParametro}=[^&]*`, 'i'); //puede estar vacio
    const nuevaURL = currentURL.replace(parametroRegex, `$1${nameParametro}=${nuevoValorDelParametro}`);
    //console.log('nuevaURL:',nuevaURL);
    //console.log('nuevoValorDelParametro:',nuevoValorDelParametro);
        
    // Redirigir a la nueva URL
    window.location.href = nuevaURL;
}


// Llamar a esta función para mostrar la página actual inicialmente
//actualizarNumeroDePagina();

// Función para avanzar a la siguiente página
function nextPage() {
    let currentPage = getValorDeUnParametroDelHash('page');
    if(currentPage == null){
        console.log('El parametro page no está en la URL');
        //currentPage=1;
        //window.location.hash = window.location.hash+`&page=1`;
    }
    currentPage++;
    //actualizarNumeroDePagina(currentPage);
    actualizarValorDeUnParametro('page',currentPage);
    // Aquí puedes agregar lógica adicional para cargar los datos de la siguiente página
}

// Función para retroceder a la página anterior
function prevPage() {
    let currentPage = getValorDeUnParametroDelHash('page');
    if(currentPage == null){
        console.log('El parametro page no está en la URL');
        //currentPage=1;
        //window.location.hash = window.location.hash+`&page=1`;
    }
    if (currentPage > 1) {
        currentPage--;
        //actualizarNumeroDePagina(currentPage);
        actualizarValorDeUnParametro('page',currentPage);
        // Aquí puedes agregar lógica adicional para cargar los datos de la página anterior
    }
}


//buscador
document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");

    /*
    // Agregar un event listener al botón
    submitButton.addEventListener("click", function () {
        // Obtener el valor del campo de entrada de texto
        const inputValue = textInput.value;

        // Realizar alguna acción con el valor, por ejemplo, mostrarlo en la consola
        console.log("Texto ingresado:", inputValue);

        // Puedes realizar otras acciones o lógica aquí según tus necesidades

        // Obtener la URL actual
        //const currentURL = window.location.href;
            
        // Buscar y reemplazar el valor del parámetro "page" en la URL
        setValorDeUnParametroDelHash('name',inputValue)
            
        // Redirigir a la nueva URL
        //window.location.href = nuevaURL;
    });
    */
});

/*
function miFuncion() {
    alert("¡Botón clickeado!");
}
*/
/*
function actualizarBusqueda() {
    //alert("¡Botón clickeado!, submitButtonFuncion");
    // Obtener el valor del campo de entrada de texto
    const inputValue = textInput.value;

    // Realizar alguna acción con el valor, por ejemplo, mostrarlo en la consola
    console.log("Texto ingresado:", inputValue);

    // Puedes realizar otras acciones o lógica aquí según tus necesidades

    // Obtener la URL actual
    //const currentURL = window.location.href;

    // Buscar y reemplazar el valor del parámetro "page" en la URL
    setValorDeUnParametroDelHash('name',inputValue)

    // Redirigir a la nueva URL
    //window.location.href = nuevaURL;
}
*/