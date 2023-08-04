const os = require ('os'); 
// Get the number of total memory in Byte 
var totalRAM = os.totalmem(); 
// Print the result in MB 
// console.log(totalRAM / (1024 * 1024)); 
// Get the number of available memory in Byte 
var freeRAM = os.freemem(); 
// Print the result in MB 
// console.log(freeRAM / (1024 * 1024));



var mmn = document.getElementById('max-memory-num');
var cumn = document.getElementById('cur-used-memory-num');
var btn = document.getElementById('check-again');

btn.onclick = function(){
    totalRAM = os.totalmem(); 
    freeRAM = os.freemem(); 
    mmn.textContent = totalRAM / (1024 * 1024);
    cumn.textContent = freeRAM / (1024 * 1024);
};