
import { Request, Response } from "express";

export class Routes {    
    public routes(app:any): void {   
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).json({
                version: '0.0.1'
            })
        })
        
        app.route('/user') 
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })        

        app.route('/user/:id')
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
    }
}