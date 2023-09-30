const Footer = () => {
    const view = `
      <footer class="Footer">
        <div class="Footer-content">
            <p>&copy; 2023 CoinLore.co, By Angel Palacios</p>
            <!--
            <ul class="Footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>
            -->
            <div class="Footer-content">
                <ul class="Footer-links">
                    <!--
                    <li><a href="/">Home</a></li>
                    -->
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </footer>
    `;
    return view;
  };
  
export default Footer;