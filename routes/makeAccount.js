import User from '../models/User.js';
const route = {
    endpoint: '/api/accounts/create',
    use: async (req, res) => {
        var reels = [req.query.name, req.query.username, req.query.password, req.query.email];
        if(reels.includes(undefined) || reels.includes(null) || reels.includes("")) return res.end("<h1>Make sure to add ?name&username&password&email</h1>");
        // db.users.insertOne();
        var user = new User({
            name: reels[0],
            username: reels[1],
            password: reels[2],
            email: reels[3]
        });
        await user.save().catch(exc => res.send(exc));
        res.json({user, success: true});
    }
};

export default route;
  