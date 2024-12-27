import express from 'express';
const app = express();

app.use(express.json())


const items = []
let idx = 1;

app.get('/items', (req, res) => {

    res.send(items);
});

app.post('/items', (req, res) => {

  const { name, description } = req.body;
  
    items.push({
      id: idx++,
      name,
      description
    });

  res.send(items);
});

app.delete('/items/:id', (req, res) => {

    const {id} = req.params;

  items.find((item) => {
    return item.id !== id
  });

res.send({status:200})
})

const port = parseInt(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
