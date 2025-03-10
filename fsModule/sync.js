const fs = require("fs");

// const fileName = "text.txt";
// const writeCreateFile = fs.writeFileSync(
//   fileName,
//   "This is the first file created by using Node.js with the help of FS Module.",
//   "utf-8"
// );
// // // utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.
// console.log(writeCreateFile);


// /*
// // // Step :-0).    After writting the program don't forget to save it either it will not work or node will throw error.
// // // Step :-1).    Open the Terminal.
// // // Step :-2).    Then, write command => clear and hit enter to clear all the stuff.
// // // Step :-3).    Then, write command => ls and hit enter to know the list of all the files and folder of this particular project. It will show the folder named as fsModule.
// // // Step :-4).    Then, write command => cd fsModule and hit enter to move inside it.
// // // Step :-5).    Then, write command => ls and hit enter to know the list of all the files and folder of this particular project. Now, it will show the files named as sync.js and theory.js.
// // // Step :-6).    Then, write command => node sync.js to move or to get data or Output.
// // // Therefore, Here we are getting the Output on Terminal as undefined and as well as we are able to see the new file is created named as text.txt. If we open that file we can see (This is the first file created by using Node.js with the help of FS Module.) as we have written the program to create text.txt file and having this data or content inside it.
// */

////////----------------------------------------------------------------------------------------------------------

// // // Theory of Create (fs.writeFileSync) :--

/*
// // fs.writeFileSync() :- Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content. 

// // ! syntax : fs.writeFileSync(filePath, data, options);
// // ? filePath : The file path to write to.
// // ? data : The content to write to the file.
// // ? options : Optional. Includes encoding ('utf8'), mode, or flags.
*/


///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */



const fileName = "text.txt";
const readingFile = fs.readFileSync(fileName);
// console.log(readingFile);

// // // Here, we are getting the output on Terminal as :- 
// // // Step :-1).    First of all save the program properly.
// // // Step :-2).    Then, write command => clear and hit enter to clear all the stuff if you want.
// // // Step :-3).    Then, write command => node .\sync.js
// // // Step :-4).    Finally, we will get the Output on Terminal as :- 
// // // <Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 62 79 20 75 73 69 6e 67 20 4e 6f 64 65 2e 6a 73 20 77 69 ... 25 more bytes>
// // // This Buffer occur because we have not mentioned in which format. We want to get the data or content format in which we want.

// // // Therefore, to get the proper format data or content. Use .toString() as mention below.
console.log(readingFile.toString());
// // // Now, again repeat the following STEPS OF TERMINAL TO GET THE DATA.
// // // Finally, we get the Output on the Terminal as :-
// // // This is the first file created by using Node.js with the help of FS Module.
// // // Therefore, we are getting the Output in proper string format now.
