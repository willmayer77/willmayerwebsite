// backend.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

const findUserByName = (name) => {
    return users["users_list"].filter(
        (user) => user["name"] === name
    );
};


const findUserById = (id) =>
    users["users_list"].find((user) => user["id"] === id);

const addUser = (user) => {
    var newUser = {
        ...user,
        id: Math.floor(Math.random() * 9999)
    }
    users["users_list"].push(newUser);
    //add a comment here
    console.log("made it here too", newUser);
    return newUser;
};

const deleteUser = (deleteID) => {
    const index = users.users_list.findIndex(
        user => user.id === deleteID
    );
    if (index !== -1) {
        users.users_list.splice(index, 1);
        return 204;
    }
    return 404;
}


app.get("/users", (req, res) => {
    const name = req.query.name;
    if (name != undefined) {
      let result = findUserByName(name);
      result = { users_list: result };
      res.send(result);
    } else {
      res.send(users);
    }
  });

app.get("/users/:id", (req, res) => {
    const id = req.params["id"];
    let result = findUserById(id);
    if (result === undefined) {
        res.status(404).send("Resource not found.")
    } else {
        res.send(result);
    }
});

app.post("/users", (req, res) => {
    const userToAdd = req.body;
    const newUser = addUser(userToAdd);
    res.status(201).send(newUser);
})

app.delete("/users", (req, res) => {
    const deleteID = req.body;
    const status = deleteUser(deleteID);
    if (status === 204) {
        res.status(204).send();
    }
    else {
        res.status(404).send();
    }
})

// table data
const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };