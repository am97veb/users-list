import express from "express";

const app = express();

const users = [
  { id: 1, name: "Janina Kowalski", email: "jan@example.com" },
  { id: 2, name: "Anna Nowak", email: "anna@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});