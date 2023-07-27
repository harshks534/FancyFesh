// const csvtojson = require('csvtojson');
// const mongodb= require('mongodb');
// // CSV file name
// const fileName = “styles.csv”;
// var arrayToInsert = [];
// csvtojson().fromFile(fileName).then(source => {
//     // Fetching the all data from each row
//     for (var i = 0; i < source.length; i++) {
//          var oneRow = {
//              id: source[i][“id”],
//              gender: source[i][“gender”],
//              masterCategory: source[i][“masterCategory”],
//              subCategory: source[i][“subCategory”]
//              articleType: source[i][“articleType”]
//              baseColour: source[i][“baseColour”]
//              season: source[i][“season”]
//              year: source[i][“year”]
//              usage: source[i][“usage”]
//              productDisplayName: source[i][“productDisplayName”]
//              filename: source[i][“filename”]
//              link: source[i][“link”]
//              price: source[i][“price”]
//          };
//          arrayToInsert.push(oneRow);
//      }
//      //inserting into the table “employees”
//      var collectionName = ‘employees’;
//      var collection = dbConn.collection(collectionName);
//      collection.insertMany(arrayToInsert, (err, result) => {
//          if (err) console.log(err);
//          if(result){
//              console.log(“Import CSV into database successfully.”);
//          }
//      });
// });