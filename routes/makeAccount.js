import db from '../api/mongo.js';
const route = {
    endpoint: '/api/accounts/create',
    use: (req, res) => {
        res.end("Works");
    }
};

export default route;
  