import express from 'express';
import serverConfig from './config/server.json' assert {type: 'json'};
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = serverConfig.port;

app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log("Listening on", port);
});