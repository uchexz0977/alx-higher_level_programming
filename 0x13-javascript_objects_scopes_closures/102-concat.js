#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments are provided
if (process.argv.length !== 5) {
    console.error("Usage: ./102-concat.js <file1> <file2> <destination>");
    process.exit(1);
}

// Get file paths from command-line arguments
const file1Path = process.argv[2];
const file2Path = process.argv[3];
const destinationPath = process.argv[4];

// Read contents of file1
fs.readFile(file1Path, 'utf8', (err, data1) => {
    if (err) {
        console.error(`Error reading ${file1Path}:`, err);
        process.exit(1);
    }
    
    // Read contents of file2
    fs.readFile(file2Path, 'utf8', (err, data2) => {
        if (err) {
            console.error(`Error reading ${file2Path}:`, err);
            process.exit(1);
        }
        
        // Concatenate data from both files
        const concatenatedData = data1 + data2;
        
        // Write concatenated data to the destination file
        fs.writeFile(destinationPath, concatenatedData, (err) => {
            if (err) {
                console.error(`Error writing to ${destinationPath}:`, err);
                process.exit(1);
            }
            
            console.log(`Files ${file1Path} and ${file2Path} concatenated successfully to ${destinationPath}`);
        });
    });
});

