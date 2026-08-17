"use strict";

const functions = require("firebase-functions");
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const {simpleResponse, suggestions, basicCard} = require("./components");
const {validateParamsString} = require("./validate");

global.characters = require("./character.json");
global.images =
  "https://us-central1-curso1-mhyi.cloudfunctions.net/curso/imagenes/";

const server = express();
server.use(bodyparser.urlencoded({extended: true}));

server.use(bodyparser.json());

server.use("/imagenes", express.static(path.join(__dirname, "./imagenes")));

server.post("/curso", (req, res) => {
  let context = "nada";
  let result = "incorrecta";
  const options = ["Chistes", "Consejos", "Noticias"];

  try {
    context = req.body.queryResult.action;
    result = `${context}`;

    if (context === "input.welcome") {
      const request = req.body.queryResult.queryText.split(" ");

      const response = [{hola: ", como estas ?"}, {hi: ", how are you ?"}];

      request.forEach((sal) => {
        response.forEach((element) => {
          const keys = Object.keys(element);
          keys.forEach((element1) => {
            if (sal == element1) {
              result = simpleResponse(`${sal}${element[sal]}`);
              suggestions(result, options);
            }
          });
        });
      });
    } else if (context === "input.unknown") {
      const sendText = "Hola, no te entendi";
      result = simpleResponse(sendText);
    } else if (context === "character") {
      const character = req.body.queryResult.parameters.character;
      if (validateParamsString(character)) {
        const charactersOptions = Object.keys(global.characters).slice();
        charactersOptions.unshift("Menú");
        if (validateParamsString(global.characters[character])) {
          const textSend = global.characters[character];
          const image = encodeURI(global.images + character + ".jpg");
          const url = "https://www.google.com/search?q=" + character;
          result = simpleResponse(`Me encanta ${character}`);
          basicCard(result, character, character, textSend, image, url);
          suggestions(result, charactersOptions);
        } else {
          result = simpleResponse(`Lo siento, todavía no se de ${character}`);
        }
      } else {
        result = simpleResponse("No conozco a ese personaje");
      }
    } else if (context === "listado_personajes") {
      const charactersOptions = Object.keys(global.characters).slice();
      charactersOptions.unshift("Menú");
      result = simpleResponse("te muestro algunos personajes que conozco");
      suggestions(result, charactersOptions);
    } else {
      const sendText = "desconocido" + context;
      result = simpleResponse(sendText);
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

const prod = true;
if (prod) {
  // firebase deploy
  exports.curso = functions.https.onRequest(server);
} else {
  server.listen(process.env.PORT || 8000, () => {
    console.log("server ready");
  });
}
