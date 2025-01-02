//* SETUP SERVER
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router/contactRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/form", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
