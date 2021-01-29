
/* libWebUtil.js Service Module */
//Inspiration from Morten Højrup Kristensen :-) 
"use strict";

const querystring = require("querystring"); // parsing and formatting URL query strings
const query = require("query"); //not in use at the moment

const createObject = function (req){
    
   if(req.method == 'POST'){

        let body = '';
        req.on('data', function (data) { //'on' binds an event to an object - AKA when data is being sent
            body += data;
        });
        
        req.on('end', function() { //when the request is over
        let post = querystring.parse(body); //parsing our data 

        for (var propName in post) { //for each property name in post object 
            console.log(`"${propName}": "${post[propName]}",`); //print out data
        }

       }); 
   }
   if(req.method == 'GET') {
        req.on('end', function() {
            let get = req.url.split("?"); //split query string after ? 
            let GET = querystring.parse(get[1]); 
            for (var propName in GET) { //for each property name in post object 
                console.log(`"${propName}": "${GET[propName]}",`); //print out data
            }
    
        });
   }
}


exports.createObject = createObject;