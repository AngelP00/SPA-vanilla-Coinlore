/*
const API = 'https://rickandmortyapi.com/api/character/';

// Definir la página y la cantidad de personajes por página
//const page = 2; // Cambia esto para obtener diferentes páginas
//const limit = 4; // Cambia esto para ajustar la cantidad de personajes por página

// Construir la URL con los parámetros de consulta
//const API = `https://rickandmortyapi.com/api/character/?page=${page}&limit=${limit}`;

//const getData = async (id) => {
    //onst apiURL = id ? `${API}${id}` : API;
const getData = async (id, page,name) => { // Agregamos el parámetro "page" con un valor predeterminado de 1
    // Construimos la URL de la API con el número de página
    //const apiURL = id ? `${API}${id}` : `${API}?page=${page}`;
    let apiURL;
    if(id){
        apiURL = `${API}${id}`;
    }
    else if(page){
        apiURL = `${API}?page=${page}`;
    }
    else if(name){
        apiURL = `${API}?name=${name}`;
    }

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            const data = await response.json();
            throw data.error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        //console.error('error:', error);
        throw error; // Propaga el error para que se maneje en el llamador
    }
};

export default getData;

*/
const API = 'https://rickandmortyapi.com/api';


// Construir la URL con los parámetros de consulta
//const API = `https://rickandmortyapi.com/api/character/?page=${page}&limit=${limit}`;

//const getData = async (id) => {
    //onst apiURL = id ? `${API}${id}` : API;
const getData = async (hash) => { // Agregamos el parámetro "page" con un valor predeterminado de 1
    // Construimos la URL de la API con el número de página
    //const apiURL = id ? `${API}${id}` : `${API}?page=${page}`;
    //let apiURL = `${API}/${hash}`;
    let apiURL = `${API}${hash}`;
    console.log('apiURL:', apiURL);
    

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            const data = await response.json();
            throw data.error;
        }
        const data = await response.json();
        //console.log('data.info:', data.info);
        //console.log('data.info.count:', data.info.count);
        //console.log('data.info.pages:', data.info.pages);
        return data;
    } catch (error) {
        //console.error('error:', error);
        throw error; // Propaga el error para que se maneje en el llamador
    }
};

export default getData;
