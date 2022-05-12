<<<<<<< HEAD
const cheerio = require("cheerio");
let html = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;
//cheerio stores data in form of object
let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr.text());

let fruitName = selecTool(".pear");
console.log(fruitName.text());
=======
const request = require("request");
//cheerio
// Cheerio parses HTML and it traverses the html so that data can be manipulated according to user's needs
const cheerio=require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        handleHtml(body);
    }
}

function handleHtml(html) {
    
    let selecTool = cheerio.load(html);

    let coronaStats= selecTool(".maincounter-number");

    console.log(coronaStats.text());

    let totalCases = selecTool(coronaStats[0]).text();
    console.log("Total Cases -> " + totalCases);

    let totalDeaths = selecTool(coronaStats[1]).text();
    console.log("Total Deaths -> " + totalDeaths);

    let totalRecovered = selecTool(coronaStats[2]).text();
    console.log("Total Patients Recovered -> " + totalRecovered);
}
>>>>>>> 8387b35 (project hackerrank started)
