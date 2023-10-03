//const API = 'https://rickandmortyapi.com/api';
const API = 'https://api.coinlore.net/api';

const getData = async (hash) => {
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
        let data = await response.json();
        return data;
    } catch (error) {
        //console.error('error:', error);
        throw error; // Propaga el error para que se maneje en el llamador
    }
};

export default getData;
