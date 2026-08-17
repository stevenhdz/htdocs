const express = require("express");
const axios = require("axios");
const responseTime = require("response-time");
const { createClient } = require("redis");

const app = express();

// Connecting to redis
const client = createClient({
  host: "127.0.0.1",
  port: 6379,
});

app.use(responseTime());

app.use(express.json());

// Get Character
app.get("/character", async (req, res, next) => {
    try {
      const reply = await client.get("character1");
  
      if (reply) return res.send(JSON.parse(reply));

      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
  
      const saveResult = await client.set(
        "character1",
        JSON.stringify(response.data),
        {
          EX: 10,
        }
      );
      console.log(saveResult)

      res.send(response.data);
    } catch (error) {
      res.send(error.message);
    }
  });

// Get one character
app.get("/character/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const reply = await client.get(`character${id}`);

      if (reply) return res.send(JSON.parse(reply));

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const saveResult = await client.set(
        `character${id}`,
        JSON.stringify(response.data),
      )

      res.send(response.data);
    } catch (error) {
      res.send(error.message);
    }
})

// Delete character
app.delete("/character/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await client.del(`character${id}`);
        res.send("Character deleted")
    } catch (error) {
        res.send(error.message);
    }
})

// Update character
app.put("/character/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await client.set(`character${id}`, name);
        res.send("Character updated")
    } catch (error) {
        res.send(error.message);
    }
})

// Create character
app.post("/character", async (req, res, next) => {
    try {
        const { name } = req.body;
        await client.set(`character${name}`, name);
        res.send("Character created")
    } catch (error) {
        res.send(error.message);
    }
})

//RPUSH es para agregar elementos al final de una lista
app.post("/character/rpush", async (req, res, next) => {
    try {
        const { name } = req.body;
        await client.rpush("characters", name);
        res.send("Character created")
    } catch (error) {
        res.send(error.message);
    }
})

async function main() {
    await client.connect();
    app.listen(3000);
    console.log("server listen on port 3000");
  }
  
  main();

