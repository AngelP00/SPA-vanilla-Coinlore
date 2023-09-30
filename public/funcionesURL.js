//let currentPage = 1; // Variable para el número de página actual


//getValorDeUnParametroDelHash
function getValorDeUnParametroDelHash(nameParametro) {
    console.log('er 2');
    console.log('nameParametro=',nameParametro);
    const valor = getValorDeUnParametroDelHashDexURLDexURL(null,nameParametro);
    return valor;
}
function getValorDeUnParametroDelHashDexURLDexURL(URL,nameParametro) {
    // Obtener la cadena de búsqueda de parámetros (después del "?")
    const searchParams = getsearchParams(URL);
    console.log('searchParams=',searchParams);
    // Verificar si hay búsqueda de parámetros
    if (searchParams !== null) {
        // Crear un objeto URLSearchParams a partir de la cadena de búsqueda de parámetros
        const urlSearchParams = new URLSearchParams(searchParams);

        // Obtener el valor del parámetro "page"
        const valorParametro = urlSearchParams.get(nameParametro);
        
        if (valorParametro !== null) {
            console.log(nameParametro,'=',valorParametro);
            //console.log('valorParametro: ', valorParametro);
            return valorParametro;
        }
    }
    //console.log('No hay busqueda por parametro en la URL.. o El parametro no existe en la URL..');
    return null;
}

function setValorDeUnParametroDelHash(nameParametro,nuevoValorDelParametro) {
    console.log('viejoValorDelParametro:',nameParametro,'=',getValorDeUnParametroDelHashDexURLDexURL(null,nameParametro));
    console.log('nuevoValorDelParametro:',nameParametro,'=',nuevoValorDelParametro);

    console.log('setValorDeUnParametroDelHash');
    // Obtener la URL actual
    //const currentURL = window.location.href;
    let nuevaURL = window.location.href;
    console.log('window.location.href=',nuevaURL);
    console.log('getHash(nuevaURL)',getHash(nuevaURL));
    
    console.log('a0');
    console.log('a00',getValorDeUnParametroDelHashDexURLDexURL(nuevaURL,nameParametro));
    if(getValorDeUnParametroDelHashDexURLDexURL(nuevaURL,nameParametro)!==null){
        console.log('a1');

        nuevaURL=actualizarValorDeUnParametroQueExisteYRetornarLaURL(nuevaURL,nameParametro,nuevoValorDelParametro);
        
        // Buscar y reemplazar el valor del parámetro "page" en la URL
        //const parametroRegex = new RegExp(`([&?])${nameParametro}=\\w+`, 'i'); //busca una o más letras o números después del parámetro, lo que significa que si el parámetro está vacío o no contiene letras o números, la expresión regular no lo detectará.
        //const parametroRegex = new RegExp(`([&?])${nameParametro}=[^&]*`, 'i'); //puede estar vacio

        //nuevaURL = nuevaURL.replace(parametroRegex, `$1${nameParametro}=${nuevoValorDelParametro}`);
        //const nuevaURL = currentURL.replace(parametroRegex, `$1${nameParametro}=${nuevoValorDelParametro}`);
        //console.log('nuevaURL:',nuevaURL);
        //console.log('nuevoValorDelParametro:',nuevoValorDelParametro);
            
        // Redirigir a la nueva URL
        //window.location.href = nuevaURL;
    }
    else{
        
        //ir a la pagina 1 ?
        console.log('//ir a la pagina 1 ?');
        //window.location.hash = window.location.hash+`&${nameParametro}=${nuevoValorDelParametro}`;
        nuevaURL+= `&${nameParametro}=${nuevoValorDelParametro}`;

    }
    console.log('nuevaURL final=',nuevaURL);
    window.location.href = nuevaURL;
    
}

function getsearchParams(URL) {
    //console.log('getsearchParams',URL);
    const hash = getHash(URL);
    //console.log('getsearchParams',hash);
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


function getHash(URL) {
    let hash;
    //console.log('getHash a:',URL);
    if(URL == null){
        hash = location.hash;
    }
    else{
        //hash = URL.hash;
        //const urlObj = new URL(URL);
        //hash = urlObj.hash; // Obtener el hash de la URL pasada como parámetro

        const hashIndex = URL.indexOf('#');
        hash = hashIndex !== -1 ? URL.substring(hashIndex) : ''; // Obtener el hash de la URL pasada como parámetro
    }
    //console.log('getHash b:',hash);
    
    return hash ? hash.toLowerCase().replace('#', '') : '/';
}


function actualizarValorDeUnParametroQueExisteYRetornarLaURL(URL,nameParametro,nuevoValorDelParametro) {
    console.log('entra asi=',URL);
    console.log(nameParametro,nuevoValorDelParametro);
    // Obtener la URL actual
    //onst currentURL = window.location.href;
        
    // Buscar y reemplazar el valor del parámetro "page" en la URL
    //const parametroRegex = new RegExp(`([&?])${nameParametro}=\\w+`, 'i'); //esto sirve para buscar en el replace una o más letras o números después del parámetro, lo que significa que si el parámetro está vacío o no contiene letras o números, la expresión regular no lo detectará.
    const parametroRegex = new RegExp(`([&?])${nameParametro}=[^&]*`, 'i'); //puede estar vacio

    const nuevaURL = URL.replace(parametroRegex, `$1${nameParametro}=${nuevoValorDelParametro}`);
    //console.log('nuevaURL:',nuevaURL);
    //console.log('nuevoValorDelParametro:',nuevoValorDelParametro);
        
    // Redirigir a la nueva URL
    //window.location.href = nuevaURL;
    console.log('sale asi=',nuevaURL);
    return nuevaURL;
}


// Llamar a esta función para mostrar la página actual inicialmente
//actualizarNumeroDePagina();

// Función para avanzar a la siguiente página
function nextPage() {
    const limitFromHash = getValorDeUnParametroDelHash('limit');
    const limit = Math.min(limitFromHash || 100, 100) || 100; //si limitFromHash es 0 entonces el limite que usa es 100

    let currentPage = Math.ceil(getValorDeUnParametroDelHash('start')/limit);
    console.log('nextPage b');
    currentPage++;
    setValorDeUnParametroDelHash('start',currentPage*limit);
    
    //actualizarNumeroDePagina(currentPage);
    
    // Aquí puedes agregar lógica adicional para cargar los datos de la siguiente página
}

// Función para retroceder a la página anterior
function prevPage() {
    const limitFromHash = getValorDeUnParametroDelHash('limit');
    const limit = Math.min(limitFromHash || 100, 100) || 100; //si limitFromHash es 0 entonces el limite que usa es 100

    let currentPage = Math.ceil(getValorDeUnParametroDelHash('start')/limit);
    
    if (currentPage > 0) {
        currentPage--;
        //actualizarNumeroDePagina(currentPage);
        setValorDeUnParametroDelHash('start',currentPage*limit);
        // Aquí puedes agregar lógica adicional para cargar los datos de la página anterior
    }
}


//buscador

const body = document.body;
body.classList.add("light-mode");
function toggleDarkMode() {
    const modoToggle = document.getElementById("modo-toggle");
    if (modoToggle.checked) {
        console.log('dark-mode');
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        console.log('light-mode');
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

// Obtén referencias a los elementos HTML
const modoToggle = document.getElementById("modo-toggle");
const body2 = document.body;

// Verifica el estado actual del interruptor y aplica el modo correspondiente
function aplicarModo() {
  if (modoToggle.checked) {
    body2.classList.remove("light-mode");
    body2.classList.add("dark-mode");
  } else {
    body2.classList.remove("dark-mode");
    body2.classList.add("light-mode");
  }
}

// Agrega un evento de cambio al interruptor
modoToggle.addEventListener("change", () => {
  aplicarModo();
});

// Aplica el modo al cargar la página
window.addEventListener("load", () => {
  aplicarModo();
});



function reloadRouter(){
    console.log('reloadRouter()');
    var eventoPersonalizado = new Event('popstate');
    window.dispatchEvent(eventoPersonalizado);
}