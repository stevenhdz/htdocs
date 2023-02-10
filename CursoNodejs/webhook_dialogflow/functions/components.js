const simpleResponse = (text) => {
  const respuesta = {
    fulfillmentText: text,
    fulfillmentMessages: [
      {
        platform: "ACTIONS_ON_GOOGLE",
        simpleResponses: {
          simpleResponses: [
            {
              textToSpeech: text,
            },
          ],
        },
      },
      {
        text: {
          text: [text],
        },
      },
    ],
  };
  return respuesta;
};

const basicCard = (res, title, subtitle, text, image, url) => {
  res.fulfillmentMessages.push({
    platform: "ACTIONS_ON_GOOGLE",
    basicCard: {
      title: title,
      subtitle: subtitle,
      formattedText: text,
      image: {
        imageUri:
          image,
        accessibilityText: title,
      },
      buttons: [
        {
          title: `Mas info ${title}`,
          openUriAction: {
            uri: url,
          },
        },
      ],
    },
  });
};

const suggestions = (res, options) => {
  res.fulfillmentMessages.push({
    platform: "ACTIONS_ON_GOOGLE",
    suggestions: {
      suggestions: listOptionsGoogle(options),
    },
  });
};

const listOptionsGoogle = (options) => {
  const res = [];
  for (let i = 0; i < options.length; i++) {
    res.push({title: options[i]});
  }
  return res;
};

module.exports = {
  simpleResponse,
  suggestions,
  basicCard,
};
