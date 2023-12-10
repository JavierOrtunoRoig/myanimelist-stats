import express from 'express';
import cors from 'cors';
import { handler } from './client/build/handler.js';
import { getSeries } from './model.js';

const app = express();
const port = 4000;

// cors
app.use(cors())
app.get('/api', async (req, res) => {

  try {
    const { anime } = req.query;
    console.log(`Anime: ${anime}`);
    const parserdAnime = anime.split('?')[0];
    console.log(`Parsed Anime name: ${parserdAnime}`);
    const data = await getSeries(parserdAnime)
    res.json(data);
  } catch (error) {
    console.log(error);
    if (error.name === 'ProtocolError') {
      res.status(400).json({
        ok: false,
        message: 'The URL is not valid'
      });
    } else {
      res.status(500).json({
        ok: false,
        message: 'Internal server error'
      });
    }
    
  }
});

app.use(handler)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
