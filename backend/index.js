import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import express from "express";

const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, Cookie");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


app.get("/api", async (req, res) => {
    const data = await prisma.recipe.findMany( {

    });
    res.json(data);
  });

app.post("/api", async (req, res) => {
  // console.log(req.body);
  try 
  {
    await prisma.recipe.create({
      data: req.body
    })
    res.send("Post Request Called", req.body);
  }
  catch (e) {
    res.send(false);
  }
})

app.listen(PORT, () => {
    console.log('Server listening on', PORT);
});