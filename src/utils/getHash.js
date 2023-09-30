const getHash = () => {
    const hash = location.hash;
    return hash ? hash.toLowerCase().replace('#', '') : '/';
  };
  
  export default getHash;
  