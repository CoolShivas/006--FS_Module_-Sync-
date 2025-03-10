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



// const fileName = "text.txt";
// const readingFile = fs.readFileSync(fileName);
// // // console.log(readingFile);


// // // // Here, we are getting the output on Terminal as :- 
// // // // Step :-1).    First of all save the program properly.
// // // // Step :-2).    Then, write command => clear and hit enter to clear all the stuff if you want.
// // // // Step :-3).    Then, write command => node .\sync.js
// // // // Step :-4).    Finally, we will get the Output on Terminal as :- 
// // // // <Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 62 79 20 75 73 69 6e 67 20 4e 6f 64 65 2e 6a 73 20 77 69 ... 25 more bytes>
// // // // This Buffer occur because we have not mentioned in which format. We want to get the data or content format in which we want.


// // // // Therefore, to get the proper format data or content. Use .toString() as mention below.
// console.log(readingFile.toString());
// // // // Now, again repeat the following STEPS OF TERMINAL TO GET THE DATA.
// // // // Finally, we get the Output on the Terminal as :-
// // // // This is the first file created by using Node.js with the help of FS Module.
// // // // Therefore, we are getting the Output in proper string format now.



/*
// // !Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation. 
*/ 

////////----------------------------------------------------------------------------------------------------------



// const fileName = "text.txt";
// const readingFile = fs.readFileSync(fileName, 'utf-8');
// console.log(readingFile);

// // Here we are getting the Output on Terminal in proper format if we add the utf-8:-
// // This is the first file created by using Node.js with the help of FS Module.


// // --------------------------------------------------------------------------------------------


// // // Theory of Read (fs.readFileSync) :--

/*
// // fs.readFileSync() :- Reads a file's content and returns it as a string or Buffer.

// // ! syntax : const data = fs.readFileSync(filePath, options);
// // ? filePath : Path of the file to read.
// // ? options : Optional. Encoding ('utf8') to get data as a string.
*/



///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */


// const fileName = "text.txt";
// const updateAppendFile = fs.appendFileSync(fileName, "\nThis is the second line using append or update file.", 'utf-8');
// // // // Here, \n is used to get the new line. If it is not used then data appears on the same line;
// console.log(updateAppendFile);

// // // // Here, we are getting the Output on Terminal as :- undefined
// // // // Therefore, on the text.txt file the new line is added as per we want.
// // // // Now, on text.txt file contains :
// // // // This is the first file created by using Node.js with the help of FS Module.
// // // // This is the second line using append or update file.


////////----------------------------------------------------------------------------------------------------------

// // // Theory of Update (fs.appendFileSync) :--

/*
// // fs.appendFileSync() :-  Appends data to a file. If the file does not exist, it creates the file.

// // ! syntax : fs.appendFileSync(filePath, data, options);
// // ? filePath : File path to append to.
// // ? data : Content to add to the file.
// // ? options : Optional. Encoding options ('utf8').

*/

///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */



// const fileName = "text.txt";
// const deleteFile = fs.unlinkSync(fileName);
// console.log(deleteFile);

// // // // Here, we are getting the Output on Terminal as :- undefined
// // // // Therefore, we get the output as the previously. We created the file text.txt file now it is deleted.


////////----------------------------------------------------------------------------------------------------------


// // // Theory of Delete (fs.unlinkSync) :--


/*
// // Delete File (fs.unlinkSync()) :- Deletes a file by its path.

// // ! syntax : fs.unlinkSync(filePath);
// // ? filePath : The path of the file to delete.

*/



///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */



const path = require('path');

const fileName = "shivaText.txt";
const filePath = path.join(__dirname, fileName);
// // // // Here, we have use the path module for the proper clearification of path or directory to get or reach at that particularly path. Because sometime mishappening happens.

const writeCreateFile = fs.writeFileSync(filePath, "Using the Path Module with FS Module.", "utf-8");
// console.log(writeCreateFile);


// // // // Here, we are getting the Output on Terminal as :- undefined
// // // Therefore, Here we are getting the Output on Terminal as undefined and as well as we are able to see the new file is created named as "shivaText.txt". If we open that file we can see (Using the Path Module with FS Module.) as we have written the program to create "shivaText.txt" file and having this data or content inside it.



///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */



const newUpdatedFileName = "hemendrText.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
// // // // So, here the Path Module helps us to find that file directory to rename it.
const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);
// // // // Here, we are getting the Output on Terminal as :- undefined
// // // // Therefore, previously file named as "shivaText.txt" now rename it to "hemendrText.txt". Whereas, the content is same not changed while changing or renaming it.



///////*************************************************************************************************************** */
//////------------------------------------------------------------------------------------------------------------------
///////*************************************************************************************************************** */
