import User from '../models/User.js';
const route = {
    endpoint: '/api/accounts/delete/:username',
    use: async (req, res) => {
        var reels = req.params['username'];
        if(reels == (undefined) || reels == (null) || reels == ("")) return res.end("<h1>Make sure to add ?username</h1>");
        await User.findOneAndDelete({username: reels}).catch(exc => res.json(exc));
        res.json({success: true});
    }
};

export default route;
  