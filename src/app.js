// const { envs } = require('./config/env')
import { envs } from './config/env.js';
// const { startServer } = require('./server/server')
import { startServer } from './server/server.js';


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
}    
    // Función agnónstica autoconvocada
    // Agnóstica por que no tiene nombre
    // Autoconvocada porque la ejecutamos con parentesis
    
    (async() => {
        main()
    })()
