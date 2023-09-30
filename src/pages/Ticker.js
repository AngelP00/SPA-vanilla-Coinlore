import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Ticker = async () => {
    let ticker;
    try {
        /*
        const hash = getHash();
        console.log('hash 2=',hash);
        const parts = hash.split('/');
        const id = `/${parts[2]}`.replace('/','');
        ticker = await getData(id);
        */
       
        const hash = getHash();
        console.log(hash);
        ticker = await getData(hash);
        ticker = ticker[0];
        console.log('ticker',ticker.name);
        
        
    } catch (error) {
        // Si getData arroja un error, mostraremos un mensaje de error en la vista
        console.log('error 3:');
        console.error(error);
        console.error(error.message);
        if (error.message === 'Failed to fetch') {
            // Capturar errores de conexión a Internet y mostrar un mensaje de error en HTML
            return `
                <div class="error-message">
                    <p>Error de conexión a Internet. Verifica tu conexión y vuelve a intentarlo.</p>
                    <input type="button" value="Recargar página" onclick="reloadRouter();" style="">
                </div>
            `;
        }
        else if (error === 'ticker not found') {
            // Mostrar un mensaje de error en HTML
            return `
                <div class="error-message">
                    <p>Personaje no encontrado.</p>
                </div>
            `;
        } else {
            // Mostrar un mensaje de error en HTML
            return `
                <div class="error-message">
                    <p>¡Oye! Debes proporcionar un ID. El ID debe ser un numero</p>
                </div>
            `;
        }
    }
    
    const coinInfo = ticker;
    const view = `
    <div class="Tikers-inner">
        <article class="Tikers-card">
            <h2>Name: ${coinInfo.name}</h2>
        </article>
        <article class="Tikers-card">
            <h3>ID: ${coinInfo.id}</h3>
            <h3>Symbol: ${coinInfo.symbol}</h3>
            <h2>Name: ${coinInfo.name}</h2>
            <h2>Name: ${coinInfo.nameid}</h2>
            <h3>Rank: ${coinInfo.rank}</h3>
            <h3>Price USD: $${coinInfo.price_usd}</h3>
            <h3>Percent Change 24h: ${coinInfo.percent_change_24h}%</h3>
            <h3>Percent Change 1h: ${coinInfo.percent_change_1h}%</h3>
            <h3>Percent Change 7d: ${coinInfo.percent_change_7d}%</h3>
            <h3>Price BTC: ${coinInfo.price_btc} BTC</h3>
            <h3>Market Cap USD: $${coinInfo.market_cap_usd}</h3>
            <h3>Volume 24h: ${coinInfo.volume24}</h3>
            <h3>Volume 24h (Average): ${coinInfo.volume24a}</h3>
            <h3>Circulating Supply: ${coinInfo.csupply}</h3>
            <h3>Total Supply: ${coinInfo.tsupply}</h3>
            <h3>Max Supply: ${coinInfo.msupply}</h3>
        </article>
    </div>

    `;
    return view;
}

export default Ticker;
