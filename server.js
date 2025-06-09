import express from'express';
import path from'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();
const port = process.env.PORT || 8000;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

//logger middleware
app.use(logger);

// Middleware to parse JSON bodies

//Routes
app.use('/api/posts', posts);



app.use(notFound);//Error handler middleware
app.use(errorHandler);



app.listen(port, () => console.log(`Server is running on port ${port}`));
