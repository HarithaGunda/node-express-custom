const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const articlesRouter=require('./routes/articlesRouter');
const articlesjavaRouter=require('./routes/articlesjavaRouter');
const articleshtmlRouter=require('./routes/articleshtmlRouter');
const commentsRouter=require('./routes/commentsRouter');
const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/articles', articlesRouter);
app.use('/articlesjava', articlesjavaRouter);
app.use('/articleshtml', articleshtmlRouter);
app.use('/comments', commentsRouter);

app.use(express.static(__dirname+'/public/'));

app.use((req, res) => {
    // console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server for the Learn and Share Blog</h1></body></html>');
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});