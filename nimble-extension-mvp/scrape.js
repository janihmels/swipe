const cheerio = require("cheerio");
const axios = require("axios");
const pretty = require("pretty");
const fs = require("fs");
var request = require("request");
const https = require("https");
const puppeteer = require("puppeteer");

const uri = "https://www.walmart.com/ip/3UMWKST8GMFL";
//const uri = "https://www.freecodecamp.org/news/how-to-scrape-websites-with-node-js-and-cheerio/";

(async () => {
  //const { data } = await axios.get(uri);
  //const data = fs.readFileSync(uri);
  /*request.get(uri,
    function (error, response, body) {
      console.log(response.statusCode);
      if(error) { console.error(error); return;}
      //console.log(body);
    }
  );*/

  //console.log(data);
  //const $ = cheerio.load(data);
  //console.log(pretty($.html()));

})();



/*const req = https.request(uri, (res) => {
  const data = [];
  res.on("data", (_) => data.push(_));
  res.on("end", () => console.log(data.join()));
});
req.end();
*/

//const { Builder, By, until } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");

// --------------------------------------------------------------------
// --------------------------------------------------------------------
const newDriver = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  return driver;
};

(async () => {

var driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

driver.get(uri);
//driver.quit();
})();