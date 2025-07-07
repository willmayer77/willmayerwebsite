// backend.js
import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});


app.get("/users", (req, res) => {
  const { name, job } = req.query;
  
  if (name && job) {  
    userServices.findUserByNameAndJob(name, job)
      .then(users => res.send({ users_list: users }))
      .catch(error => res.status(500).send(error.message));
  } else if (name) {  
    userServices.findUserByName(name)
      .then(users => res.send({ users_list: users }))
      .catch(error => res.status(500).send(error.message));
  } else if (job) {  
    userServices.findUserByJob(job)
      .then(users => res.send({ users_list: users }))
      .catch(error => res.status(500).send(error.message));
  } else {  
    userServices.getUsers()
      .then(users => res.send({ users_list: users }))
      .catch(error => res.status(500).send(error.message));
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  userServices
    .findUserById(id)
    .then((user) => {
      if (!user) return res.status(404).send("User not found.");
      res.send(user);
    })
    .catch((error) => res.status(500).send(error));
});

app.post("/users", (req, res) => {
  userServices
    .addUser(req.body)
    .then((newUser) => res.status(201).send(newUser))
    .catch((error) => res.status(500).send(error));
});


app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userServices.findUserByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(204).send(); // No content
      } else {
        res.status(404).send("User not found.");
      }
    })
    .catch((error) => res.status(500).send(error.message));
});