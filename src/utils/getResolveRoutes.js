const resolveRoutes = (route) => {    
    const parts = route.split('/');
    console.log('route',route);

    if (route === '/home' || (route === '/')) {
        return '/';
    }
    else if (route === '/about') {
        return '/about';
    }
    else if (route === '/contact') {
        return '/contact';
    }
    else if (route.includes('/tickers/?')) {
        return '/tickers/:parametros';
    }
    else if(route.includes('/ticker/')){
        return '/ticker/:id';
    }
    else{
        return 'url no valida';
    }
    //return route;

};

export default resolveRoutes;