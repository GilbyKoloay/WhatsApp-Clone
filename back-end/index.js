import dotenv from 'dotenv';
import express from 'express';



dotenv.config();
const app = express();
const port = parseInt(process.env.PORT);



app.listen(port, err => {
  if (err) console.log('Failed to run app.', err);
  else console.log(`Succeed to run server in port ${port}.`);
});
