// Create web server
const express = require('express');
const app = express();
// Create port
const port = 4001;
// Create comments
const comments = [
  {username: 'Todd', comment: 'lololol'},
  {username: 'Skyler', comment: 'I would like to learn more about this.'},
  {username: 'Sk8erBoi', comment: 'Plz delete this account.'},
  {username: 'Ada', comment: 'Love it!'}
];
// Create get request
app.get('/comments', (req, res) => {
  res.send(comments);
});
// Create listen
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

