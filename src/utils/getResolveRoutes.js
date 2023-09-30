const resolveRoutes = (route) => {
    /*
    if (route.length <= 100) {
        let validRoute = route === '/' ? route : '/character/id';
        return validRoute;
    }
    */
    
    const parts = route.split('/');

    //route = `/${parts[1]}`;
    //console.log('route a=',route);
    //console.log('route.indexOf(?)=',route.indexOf('?'));
    /*
    if(route.includes('/location/')){
        console.log('/location');
        return '/location';
    }
    else
    */
    //if (route.indexOf('?')!== -1) {// si encuentra el '?'
    //if (route.includes('/character/?page')) {
    if (route === '/home') {
        //console.log('/');
        return '/';
    }
    else if (route === '/') {
        //console.log('/');
        return '/';
    }
    else if (route === '/about') {
        return '/about';
    }
    else if (route === '/contact') {
        return '/contact';
    }
    //else if (route.includes('/character/?')) {
    else if (route.includes('/tickers/?')) {
        console.log('/filtercharacters/:parametros')
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