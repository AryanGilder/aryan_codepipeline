const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const currentDate = new Date().toLocaleString();
    res.send(`Hello! World\n\nCurrent Date and Time: ${currentDate}`);
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
    console.log(`API server started on port ${port}`);
});
