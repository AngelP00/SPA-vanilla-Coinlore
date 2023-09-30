import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Ticker from '../pages/Ticker';
import Contact from '../pages/Contact';
//import Location from '../pages/Location';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import Tikers from '../pages/Tickers';
//import About from '../pages/Page';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
  //'/': () => Home(currentPage),               // Página de inicio con número de página
  '/': Home,
  '/ticker/:id': Ticker,                // Detalles de una moneda por ID
  '/about': About,                            // Página "Acerca de"
  '/contact': Contact,                        // Página de contacto
  '/tickers/:parametros': Tikers // Páginas adicionales
};

const router = async () => {
  
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');
    const footer = null ||  document.getElementById('footer');
    
    header.innerHTML= await Header();
    footer.innerHTML= await Footer();
    


    let hash = getHash();
    //console.log('hash=',hash);
    let route = await resolveRoutes(hash);

    console.log(route);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();

};

export default router;

window.addEventListener('popstate', () => {
  // Aquí debes manejar el cambio de ruta y cargar el contenido correspondiente.
  router();
});