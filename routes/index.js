var express = require('express');
var router = express.Router();
const Todo = require('../Data/todos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    Todo 
  });
});

router.post('/', function (req, res) {
  todos = (req.body);
    console.log("REQ BODY ", req.body)
    console.log(Todo);
  Todo.push(todos);
  res.redirect('/');
});

module.exports = router;
