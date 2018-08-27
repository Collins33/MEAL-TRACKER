import express from 'express';
// instance of express
const app = express();
// middleware to access request data
app.use(express.json())

// dummy endpoint to check if everythin works
app.get('/', (req,res) =>{
    return res.status(200).send({'message':'I am working'});
});

app.listen(3000)
console.log('app running on port ', 3000)
