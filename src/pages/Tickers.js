import getData from '../utils/getData';
import getHash from '../utils/getHash';
//import {getValorDeUnParametroDelHash,nextPage} from '../utils/funcionesUrl';
//import * as funcionesUrl from '../utils/funcionesUrl'; // Ajusta la ruta según la ubicación real de funcionesUrl.js

//const Home = async () => {

    //const Tikers = await getData('',3);
const Tikers = async () => { // Agregamos el parámetro "page" con un valor predeterminado de 1
    let view = ``;

    console.log('Tikers');
    let hash = getHash();
    console.log('er 1');
    let currentPage;
    try {
        const data = await getData(hash);
        console.log(data);
        console.log('data.data.length=',data.data.length);
        if(data.data.length == 0) throw new Error("There is nothing here");
        //data.results.sort((a, b) => a.name.localeCompare(b.name));

        //const limit = getValorDeUnParametroDelHash('limit') ?? 100;

        const limitFromHash = getValorDeUnParametroDelHash('limit');
        const limit = Math.min(limitFromHash || 100, 100) || 100; //si limitFromHash es 0 entonces el limite que usa es 100

        console.log('limit:',limit);
        //currentPage = 100;
        currentPage = Math.ceil(getValorDeUnParametroDelHash('start')/limit);
        //let maxPag = 10;
        //let maxPag = data.info.coins_num/100;
        //let maxPag = parseInt(data.info.coins_num / 100);
        const maxPag = Math.trunc(data.info.coins_num / 100);
        //let maxPag = Math.ceil(data.info.coins_num / limit)-1;
        view += `
            <!--
            <div>
                <div style="display: inline;">Results: ${data.info.count}</div>
                <div style="display: inline;">Paginas: ${data.info.pages}</div>
            </div>
            -->
            <div style="display: inline;">Results: ${data.data.length}</div>
            <h1>Page ${currentPage} of ${maxPag}</h1>
            ${getPaginator(0,currentPage,maxPag)}
            <div class="Tikers">
                ${data.data.map(coin => `
                    <article class="Tikers-item">
                        <a href="#/ticker/?id=${coin.id}">
                            <h2>${coin.symbol}</h2>
                            <p>${coin.name}</p>
                            <p>${coin.nameid}</p>
                            <p>${coin.rank}</p>
                            <p>${coin.price_usd}</p>
                        </a>
                    </article>
                `).join('')}
            </div>
        `;
    } catch (error) {
        console.log('a');

        console.log('b');
        console.error('error:',error);
        console.error('error.status:',error.status);
        if(error.message === 'There is nothing here'){
            console.error('pagina no disponible');
            view += `
            <div>No hay paginas para los parametros ingresados</div>        
            `;
        }
        else{
            console.error('Falló la peticion. Compruebe su conexion a internet');
            view += `
            <div>Falló la peticion. Compruebe su conexion a internet</div>
            <!--
            <h1>Página ${currentPage}</h1>
            -->
            <input type="button" value="Recargar página" onclick="reloadRouter();" class="btn btn-unselected">
            <!--
            <input type="button" value="prevPage" onclick="prevPage();">
            <input type="button" value="nextPage" onclick="nextPage();">
            -->
            `;
            
        }
        
       /*
        console.error('pagina no disponible');
        view += `
        <div>No hay paginas para los parametros ingresados</div>        
        `;
        */
        
        //throw error; // Propaga el error para que se maneje en el llamador
    }
    return view;
}

export default Tikers;

function getPaginator(minPag,currentPage,maxPag){
    console.log('minPag = ',minPag,'currentPage = ',currentPage,'maxPag = ',maxPag);

    const limitFromHash = getValorDeUnParametroDelHash('limit');
    const limit = Math.min(limitFromHash || 100, 100) || 100; //si limitFromHash es 0 entonces el limite que usa es 100
    
    let view = ``;
    view+=`
    <!--
    <div style="text-align-last: justify;">
    -->
    <div>
        <!--
        <p style="display: inline;">Páginas disponibles:</p>
        -->
        <div style="display: flex; justify-content: space-between;">
            <p style="display: inline; color: grey; cursor: pointer; font-size: 16px;" onclick="setValorDeUnParametroDelHash('start', ${minPag*limit});">First page. </p>
            <p style="display: inline; color: grey; cursor: pointer; font-size: 16px;" onclick="setValorDeUnParametroDelHash('start', ${maxPag*limit});"> Last Page.</p>
        </div>
        <div style="text-align-last: justify;">
            <input type="button" value="<" onclick="prevPage();" class="btn btn-unselected">
            ${fB(minPag,currentPage,maxPag, -3,'10px')}
            ${fB(minPag,currentPage,maxPag, -2,'14px')}
            ${fB(minPag,currentPage,maxPag, -1,'16px')}
            <h3 style="display: inline;">${currentPage}</h3>
            <!--
            <h3 style="display: inline; color: green;">${currentPage}</h3>
            -->
            ${fB(minPag,currentPage,maxPag, 1,'16px')}
            ${fB(minPag,currentPage,maxPag, 2,'14px')}
            ${fB(minPag,currentPage,maxPag, 3,'10px')}
    `;
    
    view+= currentPage<maxPag ? `<input type="button" value=">" onclick="nextPage();" class="btn btn-unselected">` : `<input type="button" value=">" onclick="" class="btn btn-unselected">`;
    view+=`
        </div>
    </div>
    `;
    
    function fB(minPag,currentPage,maxPag, num,font){
        currentPage = parseInt(currentPage)
        num = parseInt(num)
        if((currentPage+num)>=minPag & (currentPage+num)<=maxPag){
            //return `<p style="display: inline; color: grey; cursor: pointer; font-size: ${font};" onclick="setValorDeUnParametroDelHash('page', ${parseInt(currentPage) + num});"> ${parseInt(currentPage) + num} </p>`;
            return `<p style="display: inline; color: grey; cursor: pointer; font-size: ${font};" onclick="setValorDeUnParametroDelHash('start', ${(parseInt(currentPage)+num) * limit});"> ${parseInt(currentPage) + num} </p>`;
        }
        else{
            //return `<p style="display: inline; color: grey; cursor: pointer; font-size: ${font};" onclick=""> - </p>`;
            return ``;
        }
    }

    return view;
}