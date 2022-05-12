const request= require("request");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body){
    console.error("error",err);
<<<<<<< HEAD
    //console.log(res);
    //console.log(body);

    console.log(typeof body);
=======
    console.log(res);
    console.log(body);

    // console.log(typeof body);
>>>>>>> 8387b35 (project hackerrank started)
}




<<<<<<< HEAD
console.log("After");
=======
// console.log("After");
>>>>>>> 8387b35 (project hackerrank started)
