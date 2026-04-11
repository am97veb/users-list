import "dotenv/config";
import express from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import cors from "cors";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}))

app.use(express.json());

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "User deleted successfully" });
});

app.post("/users", async (req, res) => {
  const { name, email, phone, website, address, company } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      website,
      address: {
        create: {
          street: address.street,
          suite: address.suite,
          city: address.city,
          zipcode: address.zipcode,
        },
      },
      company: company && {
        create: {
          name: company.name,
          catchPhrase: company.catchPhrase,
        },
      },
    },
  });
  res.status(201).json({ message: "User created successfully" });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      address: true,
      company: true,
    },
  });
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/users");
});
