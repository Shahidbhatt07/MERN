let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
<<<<<<< HEAD

=======
const fs = require ("fs");
const path = require("path");
>>>>>>> 8387b35 (project hackerrank started)
const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch");
request(url, cb);

function cb(err, res, body) {
  if (err) {
    console.error("error", err);
  } else {
    handleHTML(body);
  }
}

<<<<<<< HEAD
=======
let iplPath = path.join(__dirname,"IPL");
if (!fs.existsSync(iplPath)) {
  fs.mkdirSync(iplPath);
}

>>>>>>> 8387b35 (project hackerrank started)
function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    // console.log(anchorElem);
    //attr methods -> Method for getting all attributes and their values
    let relativeLink = anchorElem.attr("href");
    // console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
}


