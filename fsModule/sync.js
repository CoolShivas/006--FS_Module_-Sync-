const fs = require("fs");

const fileName = "text.txt";
const writeCreateFile = fs.writeFileSync(
  fileName,
  "This is the first file created by using Node.js with the help of FS Module.",
  "utf-8"
);
// // utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.
console.log(writeCreateFile);

// // Step :-1).    Open the Terminal.
// // Step :-2).    Then, write command => clear and hit enter to clear all the stuff.
// // Step :-3).    Then, write command => ls and hit enter to know the list of all the files and folder of this particular project. It will show the folder named as fsModule.
// // Step :-4).    Then, write command => cd fsModule and hit enter to move inside it.
// // Step :-5).    Then, write command => ls and hit enter to know the list of all the files and folder of this particular project. Now, it will show the files named as sync.js and theory.js.
// // Step :-6).    Then, write command => node sync.js to move or to get data or Output.
// // Therefore, Here we are getting the Output on Terminal as undefined and as well as we are able to see the new file is created named as text.txt. If we open that file we can see (This is the first file created by using Node.js with the help of FS Module.) as we have written the program to create text.txt file and having this data or content inside it.