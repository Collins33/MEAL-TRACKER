import Reflection from '../models/Reflections';

const Reflections = {
    create(req, res){
        if(!req.body.success && !req.body.lowpoint && !req.body.takeAway){
            return res.status(400).send({'message':'all fields must be present'})
        }
        const reflection = Reflection.create(req.body);
        return res.status(201).send(reflection);
    },

    getAll(req,res){
        const reflections = Reflection.findAll();
        return res.status(200).send(reflections)
    },

    getOne(req, res){
        const id = req.params.id;
        const reflection = Reflection.findOne(id);
        if (!reflection){
            return res.status(404).send({'message':'reflection not found'})
        }
        return res.status(200).send(reflection)
    },

    update(req, res){
        const id = req.params.id;
        const body = req.body;
        const reflection = Reflection.findOne(id);
        if (!reflection){
            return res.status(404).send({'message':'reflection not found'})
        }
        const updatedReflection = Reflection.updateReflection(id, body)
        return res.status(200).send(updatedReflection)
    },

    deleteReflection(req, res){
        const id = req.params.id;
        const reflection = Reflection.findOne(id);
        if (!reflection){
            return res.status(404).send({'message':'reflection not found'})
        }
        const ref = Reflection.delete(id);
        return res.status(204).send({'message':'successfully deleted reflection'});
    }
}

export default Reflections;