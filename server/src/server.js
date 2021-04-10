// Set up default listening port
import express from 'express'

const PORT = 8080;

// init app
let app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
