import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

// Apply rate limiting middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    limit: 5, // Maximum 5 requests
    message: {
        error: 'Too many requests, please try again later.'
    },
    standardHeaders: 'draft-8',
    legacyHeaders: false,
});

app.use(limiter);

app.get('/api/users', (req, res) => {
    res.json({ message: 'User retrieved successfully.' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})