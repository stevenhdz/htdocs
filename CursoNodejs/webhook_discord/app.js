// https://discordjs.guide/popular-topics/webhooks.html#editing-messages
// CREAR WEBHOOK DESDE DISCORD CHANNEL

const { EmbedBuilder, WebhookClient } = require("discord.js");
const webhooks = new WebhookClient({
    url: "https://discord.com/api/webhooks/1052406553199788092/qu1ENJLbmHNh3uPvk5bEXmq_IRHH_ENckeThKveoKmBNjmgxS9gqvdTOfWR6WCD4DotN",
});
const embed = new EmbedBuilder()
    .setTitle("Webhook test nodejs + IA")
    .setColor(0x00ffff);

webhooks.send({
    content: "Webhook test + IA",
    username: "webhook",
    avatarURL: "https://i.imgur.com/xgDcD08.png",
    embeds: [embed],
});