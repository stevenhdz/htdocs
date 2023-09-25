// https://discordjs.guide/popular-topics/webhooks.html#editing-messages
// CREAR WEBHOOK DESDE DISCORD CHANNEL

const { EmbedBuilder, WebhookClient } = require("discord.js");

const webhooks = new WebhookClient({
    url: "https://discord.com/api/webhooks/1154244567235821659/yT0v1QeYIfRWRbHT9VrpMbssmeEiiZLp5fztsJCvLO-gsiHTn9j1Mm6cDkdShqHx_92l",
});

const embed = new EmbedBuilder()
    .setTitle("🖖")
    .setColor(0x00ffff)
    .setDescription("Nice too meet you");

//markdown format

const messageContent = `
**Hi, everyone!! Meeting reminder** 👌

This is a reminder for our **important** meeting.

- :date: **Date start:** *Septiembre 25, 2023*
- :alarm_clock: **Hour start:** *8:00 PM*

[In the voice channel Freelance](https://example.com/meeting)

:star: *By,* **Alex**
`;


webhooks.send({
    content: messageContent,
    username: "Bot calendar",
    avatarURL: "https://i.imgur.com/xgDcD08.png",
    embeds: [embed],
});