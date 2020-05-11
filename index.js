const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('bye there');
});

// docker build -t rsdoc/node-app .(build context)

// docker run -p 8080(web port):8080(insider container running port) <container id>
app.listen(8080, (err) => {
  console.log(`Server is running at port 8080`);
});
