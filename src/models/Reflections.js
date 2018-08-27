import moment from 'moment';
import uuid from 'uuid';

class Reflection {
    constructor(){
        this.reflections = []
    }

    // creating a reflection
    create(data){
        const newReflection = {
            id: uuid.v4(),
            success: data.success || '',
            lowPoint: data.lowPoint || '',
            takeAway: data.takeAway || '',
            createdDate: moment.now(),
            modifiedDate: moment.now()
        };
        this.reflections.push(newReflection);
        return newReflection
    }

    // find one reflection
    findOne(id){
        return this.reflections.find(reflect => reflect.id === id);
    }

    // find all reflections
    findAll(){
        return this.reflections;
    }
}