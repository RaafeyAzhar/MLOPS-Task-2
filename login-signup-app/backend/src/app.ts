import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { setRoutes } from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/login-signup-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});