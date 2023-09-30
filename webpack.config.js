const path = require('path'); // Nos permite acceder a donde estmanos en las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js', // El punto de entrada de nuestra aplicación
    output: { // Donde se envía el proyecto estructurado y compilado listo para producción  
        path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardará el proyecto
        filename: 'main.js' // El nombre del archivo final
    },
    resolve: {
        extensions: ['.js'], //Extensiones que vamos a utilizar
    },
    module: { // Modulos necesarios para trabajar
        rules: [
            {
                test: /\.js?$/, // Nos permite identificar los archivos según se encuentran en nuestro entorno
                exclude: /node_modules/, // Excluimos la carpeta de node_modules
                use: {
                    loader: 'babel-loader', // Utilizar un loader como configuración establecida
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true, // Inyecta el bundle al template HTML
                template: './public/index.html', // La ruta al template HTML
                filename: './index.html' // Nombre final del archivo
            }
        ),
        new CopyWebpackPluguin({
            patterns: [
                {
                    from: './src/styles/styles.css',
                    to: ''
                },
                {
                    from: './src/assets/img',
                    to: './assets/img/'
                }
                ,
                {
                    from: './public/funcionesURL.js',
                    to: ''
                }
                
                
            ]
        })
    ]
}