const request= require("request");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body){
    console.error("error",err);
    //console.log(res);
    //console.log(body);

    console.log(typeof body);
}




console.log("After");