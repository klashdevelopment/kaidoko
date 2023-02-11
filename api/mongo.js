import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_TOKEN, {useNewUrlParser: true});
const db = mongoose.connection;

export default {
    db: db,
    users: db.collection("Users")
}