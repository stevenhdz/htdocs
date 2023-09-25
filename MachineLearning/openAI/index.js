const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices);
}

main();