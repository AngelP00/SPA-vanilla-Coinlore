import getData from '../utils/getData';
import getHash from '../utils/getHash';
//import '../utils/ejercicio_uso_basico_de_funciones.js';
//import {actulizarParametroDeLaUrl} from '../utils/actulizarUrl';

//const Home = async () => {

    //const characters = await getData('',3);
const Home = async () => { // Agregamos el parámetro "page" con un valor predeterminado de 1
    console.log('home');
    
    //const characters = {};
    //console.log('characters=',characters);
    let view = `
        <!--
        <img class="imagen-2560px-Rick_and_Morty" src="./assets/img/a2560px_Rick_and_Morty.png" alt="Descripción de la imagen">
        -->
        <h1 />
            Welcome to CoinLore!
        </h1>
        <a href="#/tickers/?">
            <h2>Explore coins</h2>
        </a>
        <!--
        <a href="#/episode">
            <h2>Explorar episodes</h2>
        </a>
        <a href="#/location">
            <h2>Explorar locations</h2>
        </a>
        
        <a href="#/about">
            About
        </a>
        -->
    `;
    
    //view.replace('Pagina 1','currentPage');
    //console.log(view);
    //console.log('currentPage=',currentPage);
    return view;
}

export default Home;