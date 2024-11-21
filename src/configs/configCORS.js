require("dotenv").config();

const cors = (app) => {
    const cors = require('cors');

    app.use(cors({
        origin: process.env.REACT_PORT,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }));
}
export default cors;