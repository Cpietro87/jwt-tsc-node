import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/test',{
    
})
    .then(bd => console.log('Database is connected'))
    .catch(err => console.log(err));