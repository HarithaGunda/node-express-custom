const express=require('express');
const bodyParser=require('body-parser');

const articlesjavaRouter=express.Router();

articlesjavaRouter.use(bodyParser.json());

articlesjavaRouter.route('/').all((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end('Will send all the articlesjava to you');
    })
    .post((req, res) => {
        res.statusCode=403;
        res.end('POST operation not supported on /articlesjava');
    })
    .put((req, res) => {
        res.statusCode=403;
        res.end('PUT operation not supported on /articlesjava');
    })
    .delete((req, res) => {
        res.statusCode=403;
        res.end('DELETE operation not supported on /articlesjava');
    });

module.exports=articlesjavaRouter;