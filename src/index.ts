import express from 'express';
import midleware from './Router/server';

const app=express();
const port=4000;
app.use('/ss',midleware);

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
  

export default app;
