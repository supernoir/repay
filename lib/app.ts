import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";

class App {

    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();     
        this.routes.routes(this.app);        
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;