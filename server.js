const express = require('express');
const app = express();
const db = require('./utils/db');

app.use(express.json({ extended: false }));

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/search', require('./routes/search'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/workers', require('./routes/workers'));
// app.use('/api/comments', require('./routes/comments'));
// app.use('/api/skills', require('./routes/skills'));

// --------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
