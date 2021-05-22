import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

routes.forEach(route => {
  app[route.method](route.path, route.handler)
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080.")
});