import express from 'express';
import Reflection from './src/controllers/Reflection';
// instance of express
const app = express();
// middleware to access request data
app.use(express.json())

// dummy endpoint to check if everythin works
app.get('/', (req,res) =>{
    return res.status(200).send({'message':'I am working'});
});

// define the endpoints
app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflection/:id', Reflection.getOne);
app.put('/api/v1/reflection/:id', Reflection.update);
app.delete('/api/v1/reflection/:id', Reflection.delete);

app.listen(3000)
console.log('app running on port ', 3000)
