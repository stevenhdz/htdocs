const request = require('request');
const cheerio = require('cheerio');

request('https://www.facebook.com', function(error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const title = $('title').text();
    console.log(title);
  }
});