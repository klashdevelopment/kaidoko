import mongoose from 'mongoose';

await mongoose.connect(process.env.MONGO_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

export default {
    db: db,
    users: db.collection("Users")
}