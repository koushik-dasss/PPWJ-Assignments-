// You are building a program to scan through a nested file system
// structure. Represent the file system as an object:
// let fileSystem = {
// folder1: { file1: "txt", file2: "jpg" },
// folder2: { subfolder: { file3: "pdf" } },
// folder3: "mp3"
// };
// Write a recursive function scanFiles(system) that prints all file
// names and types.
let fileSystem = {
    folder1 : {file1 : "txt" , file2 : "jpg"},
    folder2 : {subfolder : {file3 : "pdf" } },
    folder3 : "mp3"
};
function scanFiles(system){
    for(let key in system){
        if(typeof system[key] === "object"){ // if value is an object , then go deeper  into the system (recursion)
            scanFiles(system[key]);
        }else{
            console.log(key + ":"+ system[key]);
        }
    }
}
scanFiles(fileSystem);