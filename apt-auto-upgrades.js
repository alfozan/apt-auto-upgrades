#!/usr/bin/env node

/*
apt-auto-upgrades.js: apt-get wrapper for periodic package upgrades

Usage:
./apt-auto-upgrades.js package1 package2 ...
Example: ./apt-auto-upgrades.js git

*/

//print time
console.log(new Date().toLocaleString() + ': ');

//parse arguments to obtain package names
packages = process.argv.slice(2,process.argv.length);
packages = packages.join(" ");

console.log('Checking package(s): ' + packages);
try {
    //synchronize process call for apt-get:
    require('child_process').execSync('sudo apt-get -y install --only-upgrade ' + packages, {stdio:[0,1,1]});
} catch (e) {
    //for debugging only:
    //console.log("Errors:",e);
} 


