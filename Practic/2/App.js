let fs = require('fs');
let name = ['Caroyln', 'Madlyn', 'Tenisha', 'Jody', 'Adele', 'Tony', 'Sarah', 'Jessia', 'Bethann', 'Audrie', 'Sona', 'Fredric', 'Ami', 'Cortez', 'Zachary', 'Florine', 'Marshall', 'Toi', 'Melody', 'Theressa', 'Ronda', 'Hortencia', 'Evan', 'Glady', 'Micaela', 'Roxanna', 'Julee', 'Ernestine', 'Gala', 'Dolores', 'Damion', 'Marylou', 'Amada', 'Amber', 'Shanta', 'Serafina', 'Rich', 'Candance', 'Kermit', 'Justa', 'Salena', 'Mallory', 'Laveta', 'Consuela', 'Deloise', 'Jay', 'Isis', 'Mireya', 'Donny', 'Lachelle'];
let surname =['Edgar', 'Sonya', 'Cinderella', 'Sylvester', 'Judith', 'Janessa', 'Hobert', 'Charise', 'Carlie', 'Paola', 'Rueben', 'Jeffie', 'Coleman', 'Dorie', 'Kimbra', 'Dorcas', 'Joya', 'Laurence', 'Alyson', 'Leonor', 'Roberta', 'Ula', 'Jayson', 'Raymond', 'Stephane', 'Haley', 'Zenia', 'Shae', 'Clarine', 'Britteny', 'Dawna', 'Ludivina', 'Dolores', 'Mariano', 'Fawn', 'Tonisha', 'Maryjane', 'Lorina', 'Christin', 'Hermine', 'Felica', 'Man', 'Armandina', 'Heath', 'Melaine', 'Saundra', 'Mitchell', 'Shanika', 'Risa', 'Clementine'];

// fs.mkdir('./students', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/js', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/java', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/java/1800', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/java/2000', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/js/1800', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/js/2000', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// let age = [];
// for(let i = 0; i < 20; i++){
//     age.push(Math.round(Math.random() * (50 - 10) + 10));
// }

// for(let i = 0; i < 20; i++){
//     let newFile = 'students/js/1800/' + Date.now() + '.txt';
//     fs.writeFile(newFile, name[i] + ' ' + surname[i] + ' ' + age[i], function (err){
//         if (err) throw err;
//     });
//     console.log('File is created successfully!');
//}

// for(let i = 0; i < 20; i++){
//     let newFile = 'students/js/2000/' + Date.now() + '.txt';
//     fs.writeFile(newFile, name[i] + ' ' + surname[i] + ' ' + age[i], function (err){
//         if (err) throw err;
//     });
//     console.log('File is created successfully!');
// }

// for(let i = 0; i < 20; i++){
//     let newFile = 'students/java/1800/' + Date.now() + '.txt';
//     fs.writeFile(newFile, name[i] + ' ' + surname[i] + ' ' + age[i] ,function (err){
//         if (err) throw err;
//     });
//     console.log('File is created successfully!');
// }

// for(let i = 0; i < 20; i++){
//     let newFile = 'students/java/2000/' + Date.now() + '.txt';
//     fs.writeFile(newFile, name[i] + ' ' + surname[i] + ' ' + age[i],function (err){
//         if (err) throw err;
//     });
//     console.log('File is created successfully!');
// }

// fs.mkdir('./students/backup', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/backup/java', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/backup/js', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/backup/java/18', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/backup/java/20', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/backup/js/18', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/backup/js/20', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

// fs.mkdir('./students/java/js', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/java/js/18', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/java/js/20', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/js/java', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/js/java/18', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });
// fs.mkdir('./students/js/java/20', function (err){
//     if (err) throw err;
//     console.log('Folder is created successfully!');
// });

var fs1 = require("fs-extra");

// fs1.copy('./students/java/1800', './students/js/java/18', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });
// fs1.copy('./students/java/2000', './students/js/java/20', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });
// fs1.copy('./students/js/1800', './students/java/js/18', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });
// fs1.copy('./students/js/2000', './students/java/js/20', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });

// var rimraf = require("rimraf");
// rimraf("students/js/1800", function () { console.log("done"); });
// rimraf("students/js/2000", function () { console.log("done"); });
// rimraf("students/java/1800", function () { console.log("done"); });
// rimraf("students/java/2000", function () { console.log("done"); });

fs1.copy('students/java/js/18', 'students/backup/java/18', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
});
// var fs1 = require("fs-extra");
// fs1.copy('./students/java/js/20', './students/backup/java/20', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });
// var fs1 = require("fs-extra");
// fs1.copy('./students/js/java/18', './students/backup/js/18', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });
// var fs1 = require("fs-extra");
// fs1.copy('./students/js/java/20', './students/backup/js/20', function (err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("success!");
//     }
// });