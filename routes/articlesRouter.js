const express=require('express');
const bodyParser=require('body-parser');

const articlesRouter=express.Router();

articlesRouter.use(bodyParser.json());

articlesRouter.route('/').all((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end('Will send all the articles to you');
    })
    .post((req, res) => {
        res.statusCode=403;
        res.end('POST operation not supported on /articles');
    })
    .put((req, res) => {
        res.statusCode=403;
        res.end('PUT operation not supported on /articles');
    })
    .delete((req, res) => {
        res.statusCode=403;
        res.end('DELETE operation not supported on /articles');
    });


articlesRouter.route('/:articleId').all((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end(`Will send details of the article: ${req.params.articleId} to you`);
    })
    .post((req, res) => {
        res.statusCode=403;
        res.end(`POST operation not supported on /home/${req.params.articleId}`);
    })
    .put((req, res) => {
        res.statusCode=403;
        res.end(`PUT operation not supported on /home/${req.params.articleId}`);
    })
    .delete((req, res) => {
        res.statusCode=403;
        res.end(`DELETE operation not supported on /home/${req.params.campsiteId}`);
    });

module.exports=articlesRouter;