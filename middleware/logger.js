import colors from 'colors';


// Middleware to log request details
const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red',
        PATCH: 'magenta'
    };

    const color = methodColors[req.method] || white;

    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` [
            color
        ]
    );
    next();

};

export default logger;