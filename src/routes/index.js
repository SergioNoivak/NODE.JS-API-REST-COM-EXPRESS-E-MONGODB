import express from 'express';
import livrosRoutes from './livrosRoutes.js';
import autoresRoutes from './autoresRoutes.js';

const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send("OK")
    })
    app.use(
        express.json(),
        livrosRoutes,
        autoresRoutes
        )


}
export default routes;