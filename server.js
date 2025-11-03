const express = require('express');

const userRouter = require('./routes/users');

const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs')
app.use('/users', userRouter);

app.get('/' , (req, res)=> {
console.log('Here');
res.render("Index", {user:"Chris!"});


});
app.get('/users/new', (req,res) =>{
    res.send('User List');
}) 
app.get('/users/new',(req, res) =>{
    res.send('New User Form');
})
//this function will run when someone goes to the root function
app.listen(3030);