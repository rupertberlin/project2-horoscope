const express = require("express");
const path = require("path");
const cors = require("cors");

// let's create express app

const app = express();

// use cors to fetch from backend API
app.use(cors());

// use some application-level middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
