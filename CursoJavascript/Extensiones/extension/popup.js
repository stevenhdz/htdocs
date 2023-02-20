const express = require("express");
require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const app = express();

app.use(express.json());

//https://platform.openai.com/docs/api-reference/authentication
const configuration = new Configuration({
    organization: "org-D7lnqoyVT5mZnN19oNp5mWHs",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/find-complexity", async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `cuanto son 2 + 2`,
      max_tokens: 1,
      temperature: 0,
    });
    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
        success: false,
        error: error.response.data,
        //You exceeded your current quota, please check your plan and billing details.
      });
  }
});

const port = process.env.PORT || 5500;

app.listen(port, () => console.log("funcional"));
