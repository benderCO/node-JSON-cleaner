var fs = require('fs');
const { resolve } = require('path');
const { fileURLToPath } = require('url');

var myFiles = process.argv.slice(2);

if(myFiles.length < 2) {
    throw new ReferenceError("Files for merge required.")
}

// // Sync
var mergedDataSync = {};

myFiles.forEach((file) => {
    mergedDataSync = {...mergedDataSync, ...JSON.parse(fs.readFileSync(file, 'utf8'))};
});

console.log('mergedDataSync: ', mergedDataSync);
fs.writeFile('Final.txt', JSON.stringify(mergedDataSync), (err) => {
    if (err) {
        throw err;
    }
});


// Async
// var fileData = [];
// var mergedDataAsync = {};

// myFiles.forEach((file) => {
//     fileData.push(
//         new Promise((resolve) => {
//             fs.readFile(file, 'utf8', (err, data) => {
//             if (err) {
//                 throw err
//             };

//             resolve(data);
//         })
//     }));
// });

// Promise.all(fileData).then((dataCollection) => {
//     dataCollection.forEach((data) => {
//         mergedDataAsync = {...mergedDataAsync, ...JSON.parse(data)}
//     });

//     fs.writeFile('Final.txt', JSON.stringify(mergedDataAsync), (err) => {
//         if (err) {
//             throw err;
//         }
//     });
// });
