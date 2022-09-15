import { PrismaClient } from '@prisma/client';
import express from "express";

const prisma = new PrismaClient()

// const express = require("express");
//const fs = require('fs');
//const router = express.Router();
// const bodyParser = require("body-parser");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// let rawdata = fs.readFileSync('test.json');
// let recipe = JSON.parse(rawdata);
// console.log(recipe);


app.get("/api", async (req, res) => {
    const data = await prisma.recipe.findMany( {

    });
    res.json(data);
  });

app.post("/api", (req, res) => {
  res.send("Post request called")
  console.log(req.body)
})

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});