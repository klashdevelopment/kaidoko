import express from 'express';
import serverConfig from './config/server.json' assert {type: 'json'};
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = serverConfig.port;

app.use(express.static(__dirname + '/public'));

var routes = fs.readdirSync('routes');
for (var route of routes) {
    if (route.endsWith('.js') || route.endsWith('.mjs')) {
        import('./routes/' + route).then(routeImported => {
            console.log(`Importing route "${route}" as ${routeImported.default.endpoint}`);
            if (routeImported.default) {
                app.use(routeImported.default.endpoint, routeImported.default.use);
            } else {
                console.error(`Error importing route "${route}"!`);
            }
        });
    }
}


app.listen(port, ()=>{
    console.log("Listening on", port);
});