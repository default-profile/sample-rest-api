import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('Server is up & running...'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
