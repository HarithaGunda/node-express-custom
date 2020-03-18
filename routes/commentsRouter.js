const express=require('express');
const bodyParser=require('body-parser');

const commentsRouter=express.Router();

commentsRouter.use(bodyParser.json());

commentsRouter.route('/').all((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end('Will send all the comments to you');
    })
    .post((req, res) => {

        /*JSON Request body sample for new comment: 
        const newComment={
        id: commentId,
        articleid: articleId,
        liked: liked,
        likedcount: likedCount,
        text: text,
        author: author,
        date: new Date().toISOString(),
        authorimg: 'images/default-profile.png',
        replied:false
    };
        */
        res.statusCode=200;
        res.end(`Comment is added under the comments section for the respective article ${req.body}`);
    })
    .put((req, res) => {
        res.statusCode=403;
        res.end('PUT operation not supported on /comments');
    })
    .delete((req, res) => {
        res.statusCode=403;
        res.end('DELETE operation not supported on /comment');
    });


commentsRouter.route('/:commentId').all((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end(`Will send details of the comment: ${req.params.commentId} to you`);
    })
    .post((req, res) => {
        res.statusCode=403;
        res.end(`POST operation not supported on /comments/${req.params.commentId}`);
    })
    .put((req, res) => {
        res.statusCode=403;
        res.end(`PUT operation not supported on /comments/${req.params.commentId}`);
    })
    .delete((req, res) => {
        res.statusCode=403;
        res.end(`DELETE operation not supported on /comments/${req.params.commentId}`);
    })
    .patch((req, res) => {
        /*Patch request body sample is as below:
            {
            liked: true,
            likedcount:(updtComment[1])+1
            }
         */
        res.statusCode=200;
        res.end(`Like flag ${req.body.liked} along with likedcount ${req.body.likedcount} for the given comment ${req.params.commentId} is updated`);
    });

module.exports=commentsRouter;