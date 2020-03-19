const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

// Define Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/workers', require('./routes/workers'));
// app.use('/api/comments', require('./routes/comments'));
// app.use('/api/skills', require('./routes/skills'));
// app.use('/api/auth', require('./routes/auth'));
// --------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
