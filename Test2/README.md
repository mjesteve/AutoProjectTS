# Test2
https://github.com/midudev/webpack-paso-a-paso-live-coding/tree/master
https://github.com/midudev/webpack-paso-a-paso-live-coding
https://www.youtube.com/watch?v=ansUGkcrhwY

servor - LocalHost
    npm install -D servor
    npx servor src index.html 5050 --reload
        * src: carpeta
        * index.html: página que va a cargar (default document)
        * 5050: Puerto
        * --reload: Refrescará index.html cuando haya un cambio

        C:\Develop\AutoProjectTS\Test2> npx servor src index.html 5050 --reload

        🗂  Serving:   C:\Develop\AutoProjectTS\Test2\src

        🏡 Local:     http://localhost:5050
        📡 Network:   http://10.0.2.15:5050

React
    npm install react react-dom

Bebel (transformaciones)

    npm i -D @babel/core babel-loader @babel/preset-react @babel/preset-env

Plugin html-webpack-plugin (conjunto de plugins - uno de ellos crea al vuelto el documento html)

    npm install --save-dev html-webpack-plugin

Sustituto de "Serv0" - plugin webpack: devServer
    (no crea los ficheros en disco sino en memoria lo que lo hace más rápido)
    npm install webpack-dev-server --save-dev

    sustituye en el lanzamiento a "webpack" y pondremos...
    
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server", <--------------------------------------
    "dev_watch": "webpack --mode development --watch",
    "run_serv0r": "npx servor dist index.html 5050 --reload",
    "run_serv0r src": "npx servor dist index.html 5050 --reload"
  },

'=============================================================================================
https://github.com/midudev/webpack-paso-a-paso-live-coding/tree/typescript-split-code


